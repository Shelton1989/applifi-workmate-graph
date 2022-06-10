import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumSIZE_REGIONWithAggregatesFilter } from "../inputs/EnumSIZE_REGIONWithAggregatesFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class SizeScalarWhereWithAggregatesInput {
    AND?: SizeScalarWhereWithAggregatesInput[] | undefined;
    OR?: SizeScalarWhereWithAggregatesInput[] | undefined;
    NOT?: SizeScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    value?: StringWithAggregatesFilter | undefined;
    region?: EnumSIZE_REGIONWithAggregatesFilter | undefined;
    productIds?: StringNullableListFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
