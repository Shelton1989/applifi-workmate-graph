import { NotificationSettingsOrderByWithRelationInput } from "../../../inputs/NotificationSettingsOrderByWithRelationInput";
import { NotificationSettingsWhereInput } from "../../../inputs/NotificationSettingsWhereInput";
import { NotificationSettingsWhereUniqueInput } from "../../../inputs/NotificationSettingsWhereUniqueInput";
export declare class FindManyNotificationSettingsArgs {
    where?: NotificationSettingsWhereInput | undefined;
    orderBy?: NotificationSettingsOrderByWithRelationInput[] | undefined;
    cursor?: NotificationSettingsWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "newArrivals" | "bookingOrOrderUpdates" | "promotions" | "saleAlerts" | "newContentILike" | "commentsOnMyReviews" | "repliesToMyComments" | "repliesToThreads" | "userId" | "createdAt" | "updatedAt"> | undefined;
}
