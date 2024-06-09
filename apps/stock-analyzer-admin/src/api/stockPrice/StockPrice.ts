import { Stock } from "../stock/Stock";

export type StockPrice = {
  closePrice: number | null;
  createdAt: Date;
  date: Date | null;
  highPrice: number | null;
  id: string;
  lowPrice: number | null;
  openPrice: number | null;
  stock?: Stock | null;
  updatedAt: Date;
  volume: number | null;
};
