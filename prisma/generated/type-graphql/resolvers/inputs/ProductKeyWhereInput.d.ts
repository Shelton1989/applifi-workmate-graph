import { BillingRelationFilter } from "../inputs/BillingRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class ProductKeyWhereInput {
    AND?: ProductKeyWhereInput[] | undefined;
    OR?: ProductKeyWhereInput[] | undefined;
    NOT?: ProductKeyWhereInput[] | undefined;
    id?: StringFilter | undefined;
    Billing?: BillingRelationFilter | undefined;
    billingId?: StringNullableFilter | undefined;
    createdBy?: StringNullableFilter | undefined;
    key?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
