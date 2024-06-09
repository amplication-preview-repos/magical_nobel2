import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StockWhereUniqueInput } from "../stock/StockWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type StockPriceWhereInput = {
  closePrice?: FloatNullableFilter;
  date?: DateTimeNullableFilter;
  highPrice?: FloatNullableFilter;
  id?: StringFilter;
  lowPrice?: FloatNullableFilter;
  openPrice?: FloatNullableFilter;
  stock?: StockWhereUniqueInput;
  volume?: IntNullableFilter;
};
