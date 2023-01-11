import { UserCreateNestedOneWithoutNotificationSettingsInput } from "../inputs/UserCreateNestedOneWithoutNotificationSettingsInput";
export declare class NotificationSettingsCreateInput {
    id?: string | undefined;
    newArrivals?: boolean | undefined;
    bookingOrOrderUpdates?: boolean | undefined;
    promotions?: boolean | undefined;
    saleAlerts?: boolean | undefined;
    newContentILike?: boolean | undefined;
    commentsOnMyReviews?: boolean | undefined;
    repliesToMyComments?: boolean | undefined;
    repliesToThreads?: boolean | undefined;
    User?: UserCreateNestedOneWithoutNotificationSettingsInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
