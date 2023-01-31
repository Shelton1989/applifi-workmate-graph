import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
export declare class BookingOrderLineItemUpdateManyMutationInput {
    details?: NullableStringFieldUpdateOperationsInput | undefined;
    comments?: NullableStringFieldUpdateOperationsInput | undefined;
    selectedQuantity?: NullableIntFieldUpdateOperationsInput | undefined;
    selectedStartDate?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    selectedEndDate?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
