import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumSIZE_REGIONFilter } from "../inputs/EnumSIZE_REGIONFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
export declare class SizeScalarWhereInput {
    AND?: SizeScalarWhereInput[] | undefined;
    OR?: SizeScalarWhereInput[] | undefined;
    NOT?: SizeScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    value?: StringFilter | undefined;
    region?: EnumSIZE_REGIONFilter | undefined;
    productIds?: StringNullableListFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
