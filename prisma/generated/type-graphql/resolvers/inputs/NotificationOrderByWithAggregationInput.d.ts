import { NotificationCountOrderByAggregateInput } from "../inputs/NotificationCountOrderByAggregateInput";
import { NotificationMaxOrderByAggregateInput } from "../inputs/NotificationMaxOrderByAggregateInput";
import { NotificationMinOrderByAggregateInput } from "../inputs/NotificationMinOrderByAggregateInput";
export declare class NotificationOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    actorId?: "asc" | "desc" | undefined;
    entityId?: "asc" | "desc" | undefined;
    hasBeenViewedBySubject?: "asc" | "desc" | undefined;
    link?: "asc" | "desc" | undefined;
    mediaLink?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: NotificationCountOrderByAggregateInput | undefined;
    _max?: NotificationMaxOrderByAggregateInput | undefined;
    _min?: NotificationMinOrderByAggregateInput | undefined;
}
