import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
export declare class NotificationSettingsUpdateManyMutationInput {
    newMenuItems?: BoolFieldUpdateOperationsInput | undefined;
    orderUpdates?: BoolFieldUpdateOperationsInput | undefined;
    newRequests?: BoolFieldUpdateOperationsInput | undefined;
    requestUpdates?: BoolFieldUpdateOperationsInput | undefined;
    commentsOnMyReviews?: BoolFieldUpdateOperationsInput | undefined;
    repliesToMyReviews?: BoolFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
