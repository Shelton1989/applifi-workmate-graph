import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { UserUpdateOneWithoutNotificationSettingsInput } from "../inputs/UserUpdateOneWithoutNotificationSettingsInput";
export declare class NotificationSettingsUpdateInput {
    newContentILike?: BoolFieldUpdateOperationsInput | undefined;
    commentsOnMyReviews?: BoolFieldUpdateOperationsInput | undefined;
    repliesToMyComments?: BoolFieldUpdateOperationsInput | undefined;
    repliesToThreads?: BoolFieldUpdateOperationsInput | undefined;
    User?: UserUpdateOneWithoutNotificationSettingsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
