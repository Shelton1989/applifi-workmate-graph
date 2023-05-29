import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { UserUpdateOneWithoutNotificationSettingsInput } from "../inputs/UserUpdateOneWithoutNotificationSettingsInput";
export declare class NotificationSettingsUpdateInput {
    newDocumentsIndexed?: BoolFieldUpdateOperationsInput | undefined;
    documentUpdates?: BoolFieldUpdateOperationsInput | undefined;
    newRequests?: BoolFieldUpdateOperationsInput | undefined;
    requestUpdates?: BoolFieldUpdateOperationsInput | undefined;
    commentsOnMyReviews?: BoolFieldUpdateOperationsInput | undefined;
    repliesToMyReviews?: BoolFieldUpdateOperationsInput | undefined;
    User?: UserUpdateOneWithoutNotificationSettingsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
