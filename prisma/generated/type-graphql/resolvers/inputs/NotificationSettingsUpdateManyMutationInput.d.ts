import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
export declare class NotificationSettingsUpdateManyMutationInput {
    newContentILike?: BoolFieldUpdateOperationsInput | undefined;
    commentsOnMyReviews?: BoolFieldUpdateOperationsInput | undefined;
    repliesToMyComments?: BoolFieldUpdateOperationsInput | undefined;
    repliesToThreads?: BoolFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
