import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { PriceUpdateOneRequiredWithoutBookingLineItemsInput } from "../inputs/PriceUpdateOneRequiredWithoutBookingLineItemsInput";
export declare class BookingOrderLineItemUpdateWithoutBookingInput {
    LineItemPrice?: PriceUpdateOneRequiredWithoutBookingLineItemsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
