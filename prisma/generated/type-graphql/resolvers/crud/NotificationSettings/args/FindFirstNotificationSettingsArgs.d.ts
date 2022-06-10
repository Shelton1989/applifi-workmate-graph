import { NotificationSettingsOrderByWithRelationInput } from "../../../inputs/NotificationSettingsOrderByWithRelationInput";
import { NotificationSettingsWhereInput } from "../../../inputs/NotificationSettingsWhereInput";
import { NotificationSettingsWhereUniqueInput } from "../../../inputs/NotificationSettingsWhereUniqueInput";
export declare class FindFirstNotificationSettingsArgs {
    where?: NotificationSettingsWhereInput | undefined;
    orderBy?: NotificationSettingsOrderByWithRelationInput[] | undefined;
    cursor?: NotificationSettingsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "newArrivals" | "orderUpdates" | "promotions" | "saleAlerts" | "postsByArtistsIFollow" | "postsByBrandsIFollow" | "userId" | "createdAt" | "updatedAt"> | undefined;
}
