import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class NotificationSettingsScalarWhereWithAggregatesInput {
    AND?: NotificationSettingsScalarWhereWithAggregatesInput[] | undefined;
    OR?: NotificationSettingsScalarWhereWithAggregatesInput[] | undefined;
    NOT?: NotificationSettingsScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    newMenuItems?: BoolWithAggregatesFilter | undefined;
    orderUpdates?: BoolWithAggregatesFilter | undefined;
    newRequests?: BoolWithAggregatesFilter | undefined;
    requestUpdates?: BoolWithAggregatesFilter | undefined;
    commentsOnMyReviews?: BoolWithAggregatesFilter | undefined;
    repliesToMyReviews?: BoolWithAggregatesFilter | undefined;
    userId?: StringNullableWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
