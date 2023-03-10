import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { OrderLineItemUpdateManyWithoutSelectedMealItemOptionInput } from "../inputs/OrderLineItemUpdateManyWithoutSelectedMealItemOptionInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class MealItemOptionUpdateWithoutMealItemInput {
    title?: StringFieldUpdateOperationsInput | undefined;
    shortDescription?: StringFieldUpdateOperationsInput | undefined;
    OrderLineItems?: OrderLineItemUpdateManyWithoutSelectedMealItemOptionInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
