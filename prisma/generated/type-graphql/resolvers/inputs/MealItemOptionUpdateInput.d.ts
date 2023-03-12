import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MealItemUpdateOneRequiredWithoutOptionsInput } from "../inputs/MealItemUpdateOneRequiredWithoutOptionsInput";
import { OrderLineItemUpdateManyWithoutSelectedMealItemOptionInput } from "../inputs/OrderLineItemUpdateManyWithoutSelectedMealItemOptionInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class MealItemOptionUpdateInput {
    MealItem?: MealItemUpdateOneRequiredWithoutOptionsInput | undefined;
    title?: StringFieldUpdateOperationsInput | undefined;
    shortDescription?: StringFieldUpdateOperationsInput | undefined;
    OrderLineItems?: OrderLineItemUpdateManyWithoutSelectedMealItemOptionInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}