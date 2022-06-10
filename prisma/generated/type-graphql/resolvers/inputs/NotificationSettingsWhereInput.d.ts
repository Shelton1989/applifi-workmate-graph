import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class NotificationSettingsWhereInput {
    AND?: NotificationSettingsWhereInput[] | undefined;
    OR?: NotificationSettingsWhereInput[] | undefined;
    NOT?: NotificationSettingsWhereInput[] | undefined;
    id?: StringFilter | undefined;
    newArrivals?: BoolFilter | undefined;
    orderUpdates?: BoolFilter | undefined;
    promotions?: BoolFilter | undefined;
    saleAlerts?: BoolFilter | undefined;
    postsByArtistsIFollow?: BoolFilter | undefined;
    postsByBrandsIFollow?: BoolFilter | undefined;
    User?: UserRelationFilter | undefined;
    userId?: StringNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
