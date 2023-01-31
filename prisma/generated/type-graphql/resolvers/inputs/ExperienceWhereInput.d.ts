import { AggregateRatingRelationFilter } from "../inputs/AggregateRatingRelationFilter";
import { BookingOrderListRelationFilter } from "../inputs/BookingOrderListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumEXPERIENCE_CATEGORYNullableFilter } from "../inputs/EnumEXPERIENCE_CATEGORYNullableFilter";
import { EnumPUBLISH_STATUSFilter } from "../inputs/EnumPUBLISH_STATUSFilter";
import { ExperienceAvailabilityListRelationFilter } from "../inputs/ExperienceAvailabilityListRelationFilter";
import { FeaturesListRelationFilter } from "../inputs/FeaturesListRelationFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { LocationListRelationFilter } from "../inputs/LocationListRelationFilter";
import { PostListRelationFilter } from "../inputs/PostListRelationFilter";
import { PriceListRelationFilter } from "../inputs/PriceListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
import { TenantRelationFilter } from "../inputs/TenantRelationFilter";
import { UserListRelationFilter } from "../inputs/UserListRelationFilter";
export declare class ExperienceWhereInput {
    AND?: ExperienceWhereInput[] | undefined;
    OR?: ExperienceWhereInput[] | undefined;
    NOT?: ExperienceWhereInput[] | undefined;
    id?: StringFilter | undefined;
    Tenant?: TenantRelationFilter | undefined;
    tenantId?: StringFilter | undefined;
    productLink?: StringNullableFilter | undefined;
    stripeProductId?: StringNullableFilter | undefined;
    title?: StringNullableFilter | undefined;
    description?: StringNullableFilter | undefined;
    category?: EnumEXPERIENCE_CATEGORYNullableFilter | undefined;
    Availability?: ExperienceAvailabilityListRelationFilter | undefined;
    Bookings?: BookingOrderListRelationFilter | undefined;
    photo?: StringNullableFilter | undefined;
    gallery?: StringNullableListFilter | undefined;
    duration?: IntNullableFilter | undefined;
    AggregateRating?: AggregateRatingRelationFilter | undefined;
    publishStatus?: EnumPUBLISH_STATUSFilter | undefined;
    LikedBy?: UserListRelationFilter | undefined;
    likedByIds?: StringNullableListFilter | undefined;
    Locations?: LocationListRelationFilter | undefined;
    Price?: PriceListRelationFilter | undefined;
    Posts?: PostListRelationFilter | undefined;
    Features?: FeaturesListRelationFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
