import { BookingOrderLineItemUpdateManyWithoutLineItemPriceInput } from "../inputs/BookingOrderLineItemUpdateManyWithoutLineItemPriceInput";
import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { CurrencyUpdateOneWithoutPricesInput } from "../inputs/CurrencyUpdateOneWithoutPricesInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ExperienceUpdateOneRequiredWithoutPriceInput } from "../inputs/ExperienceUpdateOneRequiredWithoutPriceInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class PriceUpdateInput {
    priceInLowestDenomination?: IntFieldUpdateOperationsInput | undefined;
    displayPrice?: StringFieldUpdateOperationsInput | undefined;
    currency?: CurrencyUpdateOneWithoutPricesInput | undefined;
    details?: NullableStringFieldUpdateOperationsInput | undefined;
    Experience?: ExperienceUpdateOneRequiredWithoutPriceInput | undefined;
    BookingLineItems?: BookingOrderLineItemUpdateManyWithoutLineItemPriceInput | undefined;
    isBasePrice?: BoolFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
