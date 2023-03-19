import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { LocationListRelationFilter } from "../inputs/LocationListRelationFilter";
import { MealListRelationFilter } from "../inputs/MealListRelationFilter";
import { OrderListRelationFilter } from "../inputs/OrderListRelationFilter";
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
    coverImage?: StringNullableFilter | undefined;
    experienceImages?: StringNullableListFilter | undefined;
    Users?: UserListRelationFilter | undefined;
    Meals?: MealListRelationFilter | undefined;
    Orders?: OrderListRelationFilter | undefined;
    Locations?: LocationListRelationFilter | undefined;
    acceptedUserEmailDomains?: StringNullableListFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
