import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { STOCK_TITLE_FIELD } from "../stock/StockTitle";

export const StockPriceList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"StockPrices"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="closePrice" source="closePrice" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="date" source="date" />
        <TextField label="highPrice" source="highPrice" />
        <TextField label="ID" source="id" />
        <TextField label="lowPrice" source="lowPrice" />
        <TextField label="openPrice" source="openPrice" />
        <ReferenceField label="Stock" source="stock.id" reference="Stock">
          <TextField source={STOCK_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="volume" source="volume" />
      </Datagrid>
    </List>
  );
};
