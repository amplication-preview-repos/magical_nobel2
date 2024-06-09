import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StockPriceService } from "./stockPrice.service";
import { StockPriceControllerBase } from "./base/stockPrice.controller.base";

@swagger.ApiTags("stockPrices")
@common.Controller("stockPrices")
export class StockPriceController extends StockPriceControllerBase {
  constructor(protected readonly service: StockPriceService) {
    super(service);
  }
}
