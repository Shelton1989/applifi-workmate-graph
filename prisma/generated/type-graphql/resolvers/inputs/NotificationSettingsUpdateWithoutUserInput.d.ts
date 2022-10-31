import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
export declare class NotificationSettingsUpdateWithoutUserInput {
    newContentILike?: BoolFieldUpdateOperationsInput | undefined;
    commentsOnMyReviews?: BoolFieldUpdateOperationsInput | undefined;
    repliesToMyComments?: BoolFieldUpdateOperationsInput | undefined;
    repliesToThreads?: BoolFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
