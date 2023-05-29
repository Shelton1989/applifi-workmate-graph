import { UserCreateNestedOneWithoutNotificationSettingsInput } from "../inputs/UserCreateNestedOneWithoutNotificationSettingsInput";
export declare class NotificationSettingsCreateInput {
    id?: string | undefined;
    newDocumentsIndexed?: boolean | undefined;
    documentUpdates?: boolean | undefined;
    newRequests?: boolean | undefined;
    requestUpdates?: boolean | undefined;
    commentsOnMyReviews?: boolean | undefined;
    repliesToMyReviews?: boolean | undefined;
    User?: UserCreateNestedOneWithoutNotificationSettingsInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
