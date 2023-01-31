import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PriceUpdateOneRequiredWithoutBookingLineItemsInput } from "../inputs/PriceUpdateOneRequiredWithoutBookingLineItemsInput";
export declare class BookingOrderLineItemUpdateWithoutBookingInput {
    details?: NullableStringFieldUpdateOperationsInput | undefined;
    comments?: NullableStringFieldUpdateOperationsInput | undefined;
    selectedQuantity?: NullableIntFieldUpdateOperationsInput | undefined;
    selectedStartDate?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    selectedEndDate?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    LineItemPrice?: PriceUpdateOneRequiredWithoutBookingLineItemsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
