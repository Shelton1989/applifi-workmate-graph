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
    newMenuItems?: BoolFilter | undefined;
    orderUpdates?: BoolFilter | undefined;
    newRequests?: BoolFilter | undefined;
    requestUpdates?: BoolFilter | undefined;
    commentsOnMyReviews?: BoolFilter | undefined;
    repliesToMyReviews?: BoolFilter | undefined;
    User?: UserRelationFilter | undefined;
    userId?: StringNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
