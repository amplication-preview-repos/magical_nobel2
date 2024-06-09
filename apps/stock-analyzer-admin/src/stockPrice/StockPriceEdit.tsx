import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { StockTitle } from "../stock/StockTitle";

export const StockPriceEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="closePrice" source="closePrice" />
        <DateTimeInput label="date" source="date" />
        <NumberInput label="highPrice" source="highPrice" />
        <NumberInput label="lowPrice" source="lowPrice" />
        <NumberInput label="openPrice" source="openPrice" />
        <ReferenceInput source="stock.id" reference="Stock" label="Stock">
          <SelectInput optionText={StockTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="volume" source="volume" />
      </SimpleForm>
    </Edit>
  );
};
