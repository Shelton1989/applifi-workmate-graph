import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PriceUpdateOneRequiredWithoutBookingLineItemsInput } from "../inputs/PriceUpdateOneRequiredWithoutBookingLineItemsInput";
export declare class BookingOrderLineItemUpdateWithoutBookingInput {
    details?: NullableStringFieldUpdateOperationsInput | undefined;
    comments?: NullableStringFieldUpdateOperationsInput | undefined;
    LineItemPrice?: PriceUpdateOneRequiredWithoutBookingLineItemsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
