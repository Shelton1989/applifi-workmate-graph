import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class ColorScalarWhereWithAggregatesInput {
    AND?: ColorScalarWhereWithAggregatesInput[] | undefined;
    OR?: ColorScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ColorScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    hex?: StringWithAggregatesFilter | undefined;
    productIds?: StringNullableListFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
