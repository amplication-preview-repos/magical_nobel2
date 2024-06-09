import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { STOCK_TITLE_FIELD } from "../stock/StockTitle";

export const StockPriceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
