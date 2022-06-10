import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { UserUpdateOneWithoutNotificationSettingsInput } from "../inputs/UserUpdateOneWithoutNotificationSettingsInput";
export declare class NotificationSettingsUpdateInput {
    newArrivals?: BoolFieldUpdateOperationsInput | undefined;
    orderUpdates?: BoolFieldUpdateOperationsInput | undefined;
    promotions?: BoolFieldUpdateOperationsInput | undefined;
    saleAlerts?: BoolFieldUpdateOperationsInput | undefined;
    postsByArtistsIFollow?: BoolFieldUpdateOperationsInput | undefined;
    postsByBrandsIFollow?: BoolFieldUpdateOperationsInput | undefined;
    User?: UserUpdateOneWithoutNotificationSettingsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
