import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StockService } from "./stock.service";
import { StockControllerBase } from "./base/stock.controller.base";

@swagger.ApiTags("stocks")
@common.Controller("stocks")
export class StockController extends StockControllerBase {
  constructor(protected readonly service: StockService) {
    super(service);
  }
}
