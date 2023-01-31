import { BookingOrderUpdateOneRequiredWithoutItemsInput } from "../inputs/BookingOrderUpdateOneRequiredWithoutItemsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PriceUpdateOneRequiredWithoutBookingLineItemsInput } from "../inputs/PriceUpdateOneRequiredWithoutBookingLineItemsInput";
export declare class BookingOrderLineItemUpdateInput {
    details?: NullableStringFieldUpdateOperationsInput | undefined;
    comments?: NullableStringFieldUpdateOperationsInput | undefined;
    selectedQuantity?: NullableIntFieldUpdateOperationsInput | undefined;
    selectedStartDate?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    selectedEndDate?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    LineItemPrice?: PriceUpdateOneRequiredWithoutBookingLineItemsInput | undefined;
    Booking?: BookingOrderUpdateOneRequiredWithoutItemsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
