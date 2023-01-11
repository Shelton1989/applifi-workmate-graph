import { BookingOrderLineItemUpdateManyWithoutLineItemPriceInput } from "../inputs/BookingOrderLineItemUpdateManyWithoutLineItemPriceInput";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { CurrencyUpdateOneRequiredWithoutPricesInput } from "../inputs/CurrencyUpdateOneRequiredWithoutPricesInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ExperienceUpdateOneRequiredWithoutPriceInput } from "../inputs/ExperienceUpdateOneRequiredWithoutPriceInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class PriceUpdateInput {
    priceInLowestDenomination?: IntFieldUpdateOperationsInput | undefined;
    displayPrice?: StringFieldUpdateOperationsInput | undefined;
    currency?: CurrencyUpdateOneRequiredWithoutPricesInput | undefined;
    details?: StringFieldUpdateOperationsInput | undefined;
    Experience?: ExperienceUpdateOneRequiredWithoutPriceInput | undefined;
    BookingLineItems?: BookingOrderLineItemUpdateManyWithoutLineItemPriceInput | undefined;
    isBasePrice?: BoolFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
