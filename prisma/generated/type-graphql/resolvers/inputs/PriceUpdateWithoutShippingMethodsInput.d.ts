import { CurrencyUpdateOneRequiredWithoutPricesInput } from "../inputs/CurrencyUpdateOneRequiredWithoutPricesInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { OrderLineItemUpdateManyWithoutLineItemPriceInput } from "../inputs/OrderLineItemUpdateManyWithoutLineItemPriceInput";
import { ProductUpdateManyWithoutPriceInput } from "../inputs/ProductUpdateManyWithoutPriceInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class PriceUpdateWithoutShippingMethodsInput {
    priceInLowestDenomination?: IntFieldUpdateOperationsInput | undefined;
    displayPrice?: StringFieldUpdateOperationsInput | undefined;
    currency?: CurrencyUpdateOneRequiredWithoutPricesInput | undefined;
    Products?: ProductUpdateManyWithoutPriceInput | undefined;
    OrderLineItems?: OrderLineItemUpdateManyWithoutLineItemPriceInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
