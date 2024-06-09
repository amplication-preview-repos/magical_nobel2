import { Module } from "@nestjs/common";
import { StockModuleBase } from "./base/stock.module.base";
import { StockService } from "./stock.service";
import { StockController } from "./stock.controller";
import { StockResolver } from "./stock.resolver";

@Module({
  imports: [StockModuleBase],
  controllers: [StockController],
  providers: [StockService, StockResolver],
  exports: [StockService],
})
export class StockModule {}
