import { StockWhereUniqueInput } from "./StockWhereUniqueInput";
import { StockUpdateInput } from "./StockUpdateInput";

export type UpdateStockArgs = {
  where: StockWhereUniqueInput;
  data: StockUpdateInput;
};
