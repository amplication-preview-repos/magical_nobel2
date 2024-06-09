import { StockPriceUpdateManyWithoutStocksInput } from "./StockPriceUpdateManyWithoutStocksInput";

export type StockUpdateInput = {
  market?: string | null;
  name?: string | null;
  sector?: string | null;
  stockPrices?: StockPriceUpdateManyWithoutStocksInput;
  symbolField?: string | null;
};
