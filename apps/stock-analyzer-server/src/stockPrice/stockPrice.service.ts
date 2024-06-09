import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { StockPriceServiceBase } from "./base/stockPrice.service.base";

@Injectable()
export class StockPriceService extends StockPriceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
