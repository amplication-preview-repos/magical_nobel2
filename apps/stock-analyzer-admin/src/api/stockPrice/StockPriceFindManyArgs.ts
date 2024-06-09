import { StockPriceWhereInput } from "./StockPriceWhereInput";
import { StockPriceOrderByInput } from "./StockPriceOrderByInput";

export type StockPriceFindManyArgs = {
  where?: StockPriceWhereInput;
  orderBy?: Array<StockPriceOrderByInput>;
  skip?: number;
  take?: number;
};
