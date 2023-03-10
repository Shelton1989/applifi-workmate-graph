import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MealItemUpdateOneRequiredWithoutOptionsInput } from "../inputs/MealItemUpdateOneRequiredWithoutOptionsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class MealItemOptionUpdateWithoutOrderLineItemsInput {
    MealItem?: MealItemUpdateOneRequiredWithoutOptionsInput | undefined;
    title?: StringFieldUpdateOperationsInput | undefined;
    shortDescription?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
