import { NotificationSettingsCountOrderByAggregateInput } from "../inputs/NotificationSettingsCountOrderByAggregateInput";
import { NotificationSettingsMaxOrderByAggregateInput } from "../inputs/NotificationSettingsMaxOrderByAggregateInput";
import { NotificationSettingsMinOrderByAggregateInput } from "../inputs/NotificationSettingsMinOrderByAggregateInput";
export declare class NotificationSettingsOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    newContentILike?: "asc" | "desc" | undefined;
    commentsOnMyReviews?: "asc" | "desc" | undefined;
    repliesToMyComments?: "asc" | "desc" | undefined;
    repliesToThreads?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: NotificationSettingsCountOrderByAggregateInput | undefined;
    _max?: NotificationSettingsMaxOrderByAggregateInput | undefined;
    _min?: NotificationSettingsMinOrderByAggregateInput | undefined;
}
