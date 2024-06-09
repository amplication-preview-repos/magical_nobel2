import * as graphql from "@nestjs/graphql";
import { WatchlistResolverBase } from "./base/watchlist.resolver.base";
import { Watchlist } from "./base/Watchlist";
import { WatchlistService } from "./watchlist.service";

@graphql.Resolver(() => Watchlist)
export class WatchlistResolver extends WatchlistResolverBase {
  constructor(protected readonly service: WatchlistService) {
    super(service);
  }
}
