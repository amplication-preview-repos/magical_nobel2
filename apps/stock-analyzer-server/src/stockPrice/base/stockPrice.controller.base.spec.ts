import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { StockPriceController } from "../stockPrice.controller";
import { StockPriceService } from "../stockPrice.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  closePrice: 42.42,
  createdAt: new Date(),
  date: new Date(),
  highPrice: 42.42,
  id: "exampleId",
  lowPrice: 42.42,
  openPrice: 42.42,
  updatedAt: new Date(),
  volume: 42,
};
const CREATE_RESULT = {
  closePrice: 42.42,
  createdAt: new Date(),
  date: new Date(),
  highPrice: 42.42,
  id: "exampleId",
  lowPrice: 42.42,
  openPrice: 42.42,
  updatedAt: new Date(),
  volume: 42,
};
const FIND_MANY_RESULT = [
  {
    closePrice: 42.42,
    createdAt: new Date(),
    date: new Date(),
    highPrice: 42.42,
    id: "exampleId",
    lowPrice: 42.42,
    openPrice: 42.42,
    updatedAt: new Date(),
    volume: 42,
  },
];
const FIND_ONE_RESULT = {
  closePrice: 42.42,
  createdAt: new Date(),
  date: new Date(),
  highPrice: 42.42,
  id: "exampleId",
  lowPrice: 42.42,
  openPrice: 42.42,
  updatedAt: new Date(),
  volume: 42,
};

const service = {
  createStockPrice() {
    return CREATE_RESULT;
  },
  stockPrices: () => FIND_MANY_RESULT,
  stockPrice: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("StockPrice", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: StockPriceService,
          useValue: service,
        },
      ],
      controllers: [StockPriceController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /stockPrices", async () => {
    await request(app.getHttpServer())
      .post("/stockPrices")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        date: CREATE_RESULT.date.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /stockPrices", async () => {
    await request(app.getHttpServer())
      .get("/stockPrices")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          date: FIND_MANY_RESULT[0].date.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /stockPrices/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/stockPrices"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /stockPrices/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/stockPrices"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        date: FIND_ONE_RESULT.date.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /stockPrices existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/stockPrices")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        date: CREATE_RESULT.date.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/stockPrices")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
