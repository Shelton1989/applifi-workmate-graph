import { BookingOrderUpdateOneRequiredWithoutItemsInput } from "../inputs/BookingOrderUpdateOneRequiredWithoutItemsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PriceUpdateOneRequiredWithoutBookingLineItemsInput } from "../inputs/PriceUpdateOneRequiredWithoutBookingLineItemsInput";
export declare class BookingOrderLineItemUpdateInput {
    details?: NullableStringFieldUpdateOperationsInput | undefined;
    comments?: NullableStringFieldUpdateOperationsInput | undefined;
    LineItemPrice?: PriceUpdateOneRequiredWithoutBookingLineItemsInput | undefined;
    Booking?: BookingOrderUpdateOneRequiredWithoutItemsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
