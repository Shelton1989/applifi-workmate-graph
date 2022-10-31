import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class NotificationSettingsScalarWhereWithAggregatesInput {
    AND?: NotificationSettingsScalarWhereWithAggregatesInput[] | undefined;
    OR?: NotificationSettingsScalarWhereWithAggregatesInput[] | undefined;
    NOT?: NotificationSettingsScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    newContentILike?: BoolWithAggregatesFilter | undefined;
    commentsOnMyReviews?: BoolWithAggregatesFilter | undefined;
    repliesToMyComments?: BoolWithAggregatesFilter | undefined;
    repliesToThreads?: BoolWithAggregatesFilter | undefined;
    userId?: StringNullableWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
