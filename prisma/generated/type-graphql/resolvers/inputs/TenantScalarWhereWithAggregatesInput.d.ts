import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class TenantScalarWhereWithAggregatesInput {
    AND?: TenantScalarWhereWithAggregatesInput[] | undefined;
    OR?: TenantScalarWhereWithAggregatesInput[] | undefined;
    NOT?: TenantScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    name?: StringWithAggregatesFilter | undefined;
    slug?: StringWithAggregatesFilter | undefined;
    description?: StringNullableWithAggregatesFilter | undefined;
    avatar?: StringNullableWithAggregatesFilter | undefined;
    coverImage?: StringNullableWithAggregatesFilter | undefined;
    experienceImages?: StringNullableListFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
