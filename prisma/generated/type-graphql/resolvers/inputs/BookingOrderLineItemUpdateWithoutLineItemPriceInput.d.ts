import { BookingOrderUpdateOneRequiredWithoutItemsInput } from "../inputs/BookingOrderUpdateOneRequiredWithoutItemsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
export declare class BookingOrderLineItemUpdateWithoutLineItemPriceInput {
    details?: NullableStringFieldUpdateOperationsInput | undefined;
    comments?: NullableStringFieldUpdateOperationsInput | undefined;
    Booking?: BookingOrderUpdateOneRequiredWithoutItemsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
