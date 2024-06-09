import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { StockPriceTitle } from "../stockPrice/StockPriceTitle";

export const StockCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="market" source="market" />
        <TextInput label="name" source="name" />
        <TextInput label="sector" source="sector" />
        <ReferenceArrayInput
          source="stockPrices"
          reference="StockPrice"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={StockPriceTitle} />
        </ReferenceArrayInput>
        <TextInput label="symbol" source="symbolField" />
      </SimpleForm>
    </Create>
  );
};
