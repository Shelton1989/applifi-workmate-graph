import { BillingUpdateOneRequiredWithoutProductKeyInput } from "../inputs/BillingUpdateOneRequiredWithoutProductKeyInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ProductKeyUpdateInput {
    Billing?: BillingUpdateOneRequiredWithoutProductKeyInput | undefined;
    key?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
