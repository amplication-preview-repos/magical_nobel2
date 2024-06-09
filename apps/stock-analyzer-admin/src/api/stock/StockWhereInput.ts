import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StockPriceListRelationFilter } from "../stockPrice/StockPriceListRelationFilter";

export type StockWhereInput = {
  id?: StringFilter;
  market?: StringNullableFilter;
  name?: StringNullableFilter;
  sector?: StringNullableFilter;
  stockPrices?: StockPriceListRelationFilter;
  symbolField?: StringNullableFilter;
};
