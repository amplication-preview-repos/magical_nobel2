import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WatchlistService } from "./watchlist.service";
import { WatchlistControllerBase } from "./base/watchlist.controller.base";

@swagger.ApiTags("watchlists")
@common.Controller("watchlists")
export class WatchlistController extends WatchlistControllerBase {
  constructor(protected readonly service: WatchlistService) {
    super(service);
  }
}
