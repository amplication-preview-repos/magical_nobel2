import { StockWhereInput } from "./StockWhereInput";
import { StockOrderByInput } from "./StockOrderByInput";

export type StockFindManyArgs = {
  where?: StockWhereInput;
  orderBy?: Array<StockOrderByInput>;
  skip?: number;
  take?: number;
};
