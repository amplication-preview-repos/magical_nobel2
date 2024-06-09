import { Stock as TStock } from "../api/stock/Stock";

export const STOCK_TITLE_FIELD = "name";

export const StockTitle = (record: TStock): string => {
  return record.name?.toString() || String(record.id);
};
