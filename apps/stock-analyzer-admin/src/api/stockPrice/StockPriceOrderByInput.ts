import { SortOrder } from "../../util/SortOrder";

export type StockPriceOrderByInput = {
  closePrice?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  highPrice?: SortOrder;
  id?: SortOrder;
  lowPrice?: SortOrder;
  openPrice?: SortOrder;
  stockId?: SortOrder;
  updatedAt?: SortOrder;
  volume?: SortOrder;
};
