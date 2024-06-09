import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { STOCK_TITLE_FIELD } from "./StockTitle";

export const StockShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="market" source="market" />
        <TextField label="name" source="name" />
        <TextField label="sector" source="sector" />
        <TextField label="symbol" source="symbolField" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="StockPrice"
          target="stockId"
          label="StockPrices"
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
