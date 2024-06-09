import * as graphql from "@nestjs/graphql";
import { StockResolverBase } from "./base/stock.resolver.base";
import { Stock } from "./base/Stock";
import { StockService } from "./stock.service";

@graphql.Resolver(() => Stock)
export class StockResolver extends StockResolverBase {
  constructor(protected readonly service: StockService) {
    super(service);
  }
}
