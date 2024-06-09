import { StockWhereInput } from "./StockWhereInput";

export type StockListRelationFilter = {
  every?: StockWhereInput;
  some?: StockWhereInput;
  none?: StockWhereInput;
};
