import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TenantRelationFilter } from "../inputs/TenantRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class QueryWhereInput {
    AND?: QueryWhereInput[] | undefined;
    OR?: QueryWhereInput[] | undefined;
    NOT?: QueryWhereInput[] | undefined;
    id?: StringFilter | undefined;
    Tenant?: TenantRelationFilter | undefined;
    tenantId?: StringFilter | undefined;
    queryLink?: StringNullableFilter | undefined;
    queryText?: StringNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    User?: UserRelationFilter | undefined;
    userId?: StringNullableFilter | undefined;
}
