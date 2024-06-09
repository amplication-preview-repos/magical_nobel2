import { StockPriceCreateNestedManyWithoutStocksInput } from "./StockPriceCreateNestedManyWithoutStocksInput";

export type StockCreateInput = {
  market?: string | null;
  name?: string | null;
  sector?: string | null;
  stockPrices?: StockPriceCreateNestedManyWithoutStocksInput;
  symbolField?: string | null;
};
