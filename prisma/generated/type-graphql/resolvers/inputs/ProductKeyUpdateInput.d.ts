import { BillingUpdateOneWithoutProductKeysInput } from "../inputs/BillingUpdateOneWithoutProductKeysInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ProductKeyUpdateInput {
    Billing?: BillingUpdateOneWithoutProductKeysInput | undefined;
    createdBy?: NullableStringFieldUpdateOperationsInput | undefined;
    key?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
