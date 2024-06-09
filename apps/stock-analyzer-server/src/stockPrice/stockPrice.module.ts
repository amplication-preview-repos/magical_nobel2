import { Module } from "@nestjs/common";
import { StockPriceModuleBase } from "./base/stockPrice.module.base";
import { StockPriceService } from "./stockPrice.service";
import { StockPriceController } from "./stockPrice.controller";
import { StockPriceResolver } from "./stockPrice.resolver";

@Module({
  imports: [StockPriceModuleBase],
  controllers: [StockPriceController],
  providers: [StockPriceService, StockPriceResolver],
  exports: [StockPriceService],
})
export class StockPriceModule {}
