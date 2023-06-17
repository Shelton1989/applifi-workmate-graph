import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class ProductKeyScalarWhereInput {
    AND?: ProductKeyScalarWhereInput[] | undefined;
    OR?: ProductKeyScalarWhereInput[] | undefined;
    NOT?: ProductKeyScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    billingId?: StringNullableFilter | undefined;
    createdBy?: StringNullableFilter | undefined;
    key?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
