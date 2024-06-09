import { StockPrice } from "../stockPrice/StockPrice";

export type Stock = {
  createdAt: Date;
  id: string;
  market: string | null;
  name: string | null;
  sector: string | null;
  stockPrices?: Array<StockPrice>;
  symbolField: string | null;
  updatedAt: Date;
};
