import { SortOrder } from "../../util/SortOrder";

export type StockOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  market?: SortOrder;
  name?: SortOrder;
  sector?: SortOrder;
  symbolField?: SortOrder;
  updatedAt?: SortOrder;
};
