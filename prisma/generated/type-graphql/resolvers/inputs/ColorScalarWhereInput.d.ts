import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
export declare class ColorScalarWhereInput {
    AND?: ColorScalarWhereInput[] | undefined;
    OR?: ColorScalarWhereInput[] | undefined;
    NOT?: ColorScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    hex?: StringFilter | undefined;
    productIds?: StringNullableListFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
