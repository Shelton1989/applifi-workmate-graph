import { UserCreateNestedOneWithoutNotificationSettingsInput } from "../inputs/UserCreateNestedOneWithoutNotificationSettingsInput";
export declare class NotificationSettingsCreateInput {
    id?: string | undefined;
    newMenuItems?: boolean | undefined;
    orderUpdates?: boolean | undefined;
    newRequests?: boolean | undefined;
    requestUpdates?: boolean | undefined;
    commentsOnMyReviews?: boolean | undefined;
    repliesToMyReviews?: boolean | undefined;
    User?: UserCreateNestedOneWithoutNotificationSettingsInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
