import { CurrencyUpdateOneRequiredWithoutPricesInput } from "../inputs/CurrencyUpdateOneRequiredWithoutPricesInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { OrderLineItemUpdateManyWithoutLineItemPriceInput } from "../inputs/OrderLineItemUpdateManyWithoutLineItemPriceInput";
import { ProductUpdateManyWithoutPriceInput } from "../inputs/ProductUpdateManyWithoutPriceInput";
import { ShippingMethodUpdateManyWithoutPriceInput } from "../inputs/ShippingMethodUpdateManyWithoutPriceInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class PriceUpdateInput {
    priceInLowestDenomination?: IntFieldUpdateOperationsInput | undefined;
    displayPrice?: StringFieldUpdateOperationsInput | undefined;
    currency?: CurrencyUpdateOneRequiredWithoutPricesInput | undefined;
    ShippingMethods?: ShippingMethodUpdateManyWithoutPriceInput | undefined;
    Products?: ProductUpdateManyWithoutPriceInput | undefined;
    OrderLineItems?: OrderLineItemUpdateManyWithoutLineItemPriceInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
