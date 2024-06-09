import { StockWhereUniqueInput } from "../stock/StockWhereUniqueInput";

export type StockPriceCreateInput = {
  closePrice?: number | null;
  date?: Date | null;
  highPrice?: number | null;
  lowPrice?: number | null;
  openPrice?: number | null;
  stock?: StockWhereUniqueInput | null;
  volume?: number | null;
};
