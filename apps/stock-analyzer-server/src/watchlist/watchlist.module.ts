import { Module } from "@nestjs/common";
import { WatchlistModuleBase } from "./base/watchlist.module.base";
import { WatchlistService } from "./watchlist.service";
import { WatchlistController } from "./watchlist.controller";
import { WatchlistResolver } from "./watchlist.resolver";

@Module({
  imports: [WatchlistModuleBase],
  controllers: [WatchlistController],
  providers: [WatchlistService, WatchlistResolver],
  exports: [WatchlistService],
})
export class WatchlistModule {}
