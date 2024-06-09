import * as graphql from "@nestjs/graphql";
import { StockPriceResolverBase } from "./base/stockPrice.resolver.base";
import { StockPrice } from "./base/StockPrice";
import { StockPriceService } from "./stockPrice.service";

@graphql.Resolver(() => StockPrice)
export class StockPriceResolver extends StockPriceResolverBase {
  constructor(protected readonly service: StockPriceService) {
    super(service);
  }
}
