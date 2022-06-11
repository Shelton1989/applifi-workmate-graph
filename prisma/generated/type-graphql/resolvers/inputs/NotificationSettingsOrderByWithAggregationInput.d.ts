import { NotificationSettingsCountOrderByAggregateInput } from "../inputs/NotificationSettingsCountOrderByAggregateInput";
import { NotificationSettingsMaxOrderByAggregateInput } from "../inputs/NotificationSettingsMaxOrderByAggregateInput";
import { NotificationSettingsMinOrderByAggregateInput } from "../inputs/NotificationSettingsMinOrderByAggregateInput";
export declare class NotificationSettingsOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    newArrivals?: "asc" | "desc" | undefined;
    orderUpdates?: "asc" | "desc" | undefined;
    promotions?: "asc" | "desc" | undefined;
    saleAlerts?: "asc" | "desc" | undefined;
    postsByArtistsIFollow?: "asc" | "desc" | undefined;
    postsByBrandsIFollow?: "asc" | "desc" | undefined;
    userId?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: NotificationSettingsCountOrderByAggregateInput | undefined;
    _max?: NotificationSettingsMaxOrderByAggregateInput | undefined;
    _min?: NotificationSettingsMinOrderByAggregateInput | undefined;
}