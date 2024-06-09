import { StockPrice as TStockPrice } from "../api/stockPrice/StockPrice";

export const STOCKPRICE_TITLE_FIELD = "id";

export const StockPriceTitle = (record: TStockPrice): string => {
  return record.id?.toString() || String(record.id);
};
