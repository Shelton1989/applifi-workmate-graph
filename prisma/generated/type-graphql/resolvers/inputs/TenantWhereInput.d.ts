import { BillingRelationFilter } from "../inputs/BillingRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DocumentListRelationFilter } from "../inputs/DocumentListRelationFilter";
import { QueryListRelationFilter } from "../inputs/QueryListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
import { UserListRelationFilter } from "../inputs/UserListRelationFilter";
export declare class TenantWhereInput {
    AND?: TenantWhereInput[] | undefined;
    OR?: TenantWhereInput[] | undefined;
    NOT?: TenantWhereInput[] | undefined;
    id?: StringFilter | undefined;
    name?: StringFilter | undefined;
    slug?: StringFilter | undefined;
    description?: StringNullableFilter | undefined;
    logoImage?: StringNullableFilter | undefined;
    avatar?: StringNullableFilter | undefined;
    Users?: UserListRelationFilter | undefined;
    Queries?: QueryListRelationFilter | undefined;
    Documents?: DocumentListRelationFilter | undefined;
    Billing?: BillingRelationFilter | undefined;
    acceptedUserEmailDomains?: StringNullableListFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
