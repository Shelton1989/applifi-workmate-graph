import { BookingOrderListRelationFilter } from "../inputs/BookingOrderListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { ExperienceListRelationFilter } from "../inputs/ExperienceListRelationFilter";
import { LocationListRelationFilter } from "../inputs/LocationListRelationFilter";
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
    avatar?: StringNullableFilter | undefined;
    coverImage?: StringNullableFilter | undefined;
    experienceImages?: StringNullableListFilter | undefined;
    Users?: UserListRelationFilter | undefined;
    Experiences?: ExperienceListRelationFilter | undefined;
    BookingOrders?: BookingOrderListRelationFilter | undefined;
    Locations?: LocationListRelationFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
