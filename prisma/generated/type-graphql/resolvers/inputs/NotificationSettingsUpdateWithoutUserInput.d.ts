import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
export declare class NotificationSettingsUpdateWithoutUserInput {
    newArrivals?: BoolFieldUpdateOperationsInput | undefined;
    orderUpdates?: BoolFieldUpdateOperationsInput | undefined;
    promotions?: BoolFieldUpdateOperationsInput | undefined;
    saleAlerts?: BoolFieldUpdateOperationsInput | undefined;
    postsByArtistsIFollow?: BoolFieldUpdateOperationsInput | undefined;
    postsByBrandsIFollow?: BoolFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
