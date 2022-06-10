import { NotificationSettingsOrderByWithAggregationInput } from "../../../inputs/NotificationSettingsOrderByWithAggregationInput";
import { NotificationSettingsScalarWhereWithAggregatesInput } from "../../../inputs/NotificationSettingsScalarWhereWithAggregatesInput";
import { NotificationSettingsWhereInput } from "../../../inputs/NotificationSettingsWhereInput";
export declare class GroupByNotificationSettingsArgs {
    where?: NotificationSettingsWhereInput | undefined;
    orderBy?: NotificationSettingsOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "newArrivals" | "orderUpdates" | "promotions" | "saleAlerts" | "postsByArtistsIFollow" | "postsByBrandsIFollow" | "userId" | "createdAt" | "updatedAt">;
    having?: NotificationSettingsScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
