import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
export declare class NotificationSettingsUpdateManyMutationInput {
    newDocumentsIndexed?: BoolFieldUpdateOperationsInput | undefined;
    documentUpdates?: BoolFieldUpdateOperationsInput | undefined;
    newRequests?: BoolFieldUpdateOperationsInput | undefined;
    requestUpdates?: BoolFieldUpdateOperationsInput | undefined;
    commentsOnMyReviews?: BoolFieldUpdateOperationsInput | undefined;
    repliesToMyReviews?: BoolFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
