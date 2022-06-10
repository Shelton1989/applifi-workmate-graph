import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { PriceUpdateOneRequiredWithoutShippingMethodsInput } from "../inputs/PriceUpdateOneRequiredWithoutShippingMethodsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ShippingMethodUpdateWithoutOrdersInput {
    name?: StringFieldUpdateOperationsInput | undefined;
    description?: StringFieldUpdateOperationsInput | undefined;
    label?: StringFieldUpdateOperationsInput | undefined;
    arrivalTimeInBusinessDays?: IntFieldUpdateOperationsInput | undefined;
    arrivalTimeInBusinessDaysRang?: StringFieldUpdateOperationsInput | undefined;
    arrivalTimeDescription?: StringFieldUpdateOperationsInput | undefined;
    price?: PriceUpdateOneRequiredWithoutShippingMethodsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
