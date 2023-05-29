import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TenantRelationFilter } from "../inputs/TenantRelationFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class LLMQueryWhereInput {
    AND?: LLMQueryWhereInput[] | undefined;
    OR?: LLMQueryWhereInput[] | undefined;
    NOT?: LLMQueryWhereInput[] | undefined;
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
