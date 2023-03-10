import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MealItemUpdatemealIdsInput } from "../inputs/MealItemUpdatemealIdsInput";
import { MealUpdateManyWithoutItemsInput } from "../inputs/MealUpdateManyWithoutItemsInput";
import { OrderLineItemUpdateManyWithoutSelectedMealItemInput } from "../inputs/OrderLineItemUpdateManyWithoutSelectedMealItemInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class MealItemUpdateWithoutOptionsInput {
    Meals?: MealUpdateManyWithoutItemsInput | undefined;
    mealIds?: MealItemUpdatemealIdsInput | undefined;
    title?: StringFieldUpdateOperationsInput | undefined;
    shortDescription?: StringFieldUpdateOperationsInput | undefined;
    OrderLineItems?: OrderLineItemUpdateManyWithoutSelectedMealItemInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
