import { CurrencyUpdateOneRequiredWithoutPricesInput } from "../inputs/CurrencyUpdateOneRequiredWithoutPricesInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { ProductUpdateManyWithoutPriceInput } from "../inputs/ProductUpdateManyWithoutPriceInput";
import { ShippingMethodUpdateManyWithoutPriceInput } from "../inputs/ShippingMethodUpdateManyWithoutPriceInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class PriceUpdateWithoutOrderLineItemsInput {
    priceInLowestDenomination?: IntFieldUpdateOperationsInput | undefined;
    displayPrice?: StringFieldUpdateOperationsInput | undefined;
    currency?: CurrencyUpdateOneRequiredWithoutPricesInput | undefined;
    ShippingMethods?: ShippingMethodUpdateManyWithoutPriceInput | undefined;
    Products?: ProductUpdateManyWithoutPriceInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
