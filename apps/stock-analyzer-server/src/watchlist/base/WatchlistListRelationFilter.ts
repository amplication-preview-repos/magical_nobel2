/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { WatchlistWhereInput } from "./WatchlistWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class WatchlistListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => WatchlistWhereInput,
  })
  @ValidateNested()
  @Type(() => WatchlistWhereInput)
  @IsOptional()
  @Field(() => WatchlistWhereInput, {
    nullable: true,
  })
  every?: WatchlistWhereInput;

  @ApiProperty({
    required: false,
    type: () => WatchlistWhereInput,
  })
  @ValidateNested()
  @Type(() => WatchlistWhereInput)
  @IsOptional()
  @Field(() => WatchlistWhereInput, {
    nullable: true,
  })
  some?: WatchlistWhereInput;

  @ApiProperty({
    required: false,
    type: () => WatchlistWhereInput,
  })
  @ValidateNested()
  @Type(() => WatchlistWhereInput)
  @IsOptional()
  @Field(() => WatchlistWhereInput, {
    nullable: true,
  })
  none?: WatchlistWhereInput;
}
export { WatchlistListRelationFilter as WatchlistListRelationFilter };
