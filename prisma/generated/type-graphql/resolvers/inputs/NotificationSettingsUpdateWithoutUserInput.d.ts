import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
export declare class NotificationSettingsUpdateWithoutUserInput {
    newArrivals?: BoolFieldUpdateOperationsInput | undefined;
    bookingOrOrderUpdates?: BoolFieldUpdateOperationsInput | undefined;
    promotions?: BoolFieldUpdateOperationsInput | undefined;
    saleAlerts?: BoolFieldUpdateOperationsInput | undefined;
    newContentILike?: BoolFieldUpdateOperationsInput | undefined;
    commentsOnMyReviews?: BoolFieldUpdateOperationsInput | undefined;
    repliesToMyComments?: BoolFieldUpdateOperationsInput | undefined;
    repliesToThreads?: BoolFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
