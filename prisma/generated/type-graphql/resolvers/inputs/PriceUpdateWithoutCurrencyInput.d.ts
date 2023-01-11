import { BookingOrderLineItemUpdateManyWithoutLineItemPriceInput } from "../inputs/BookingOrderLineItemUpdateManyWithoutLineItemPriceInput";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ExperienceUpdateOneRequiredWithoutPriceInput } from "../inputs/ExperienceUpdateOneRequiredWithoutPriceInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class PriceUpdateWithoutCurrencyInput {
    priceInLowestDenomination?: IntFieldUpdateOperationsInput | undefined;
    displayPrice?: StringFieldUpdateOperationsInput | undefined;
    details?: StringFieldUpdateOperationsInput | undefined;
    Experience?: ExperienceUpdateOneRequiredWithoutPriceInput | undefined;
    BookingLineItems?: BookingOrderLineItemUpdateManyWithoutLineItemPriceInput | undefined;
    isBasePrice?: BoolFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
