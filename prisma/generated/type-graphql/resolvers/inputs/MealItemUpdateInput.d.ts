import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MealItemOptionUpdateManyWithoutMealItemInput } from "../inputs/MealItemOptionUpdateManyWithoutMealItemInput";
import { MealItemUpdatemealIdsInput } from "../inputs/MealItemUpdatemealIdsInput";
import { MealUpdateManyWithoutItemsInput } from "../inputs/MealUpdateManyWithoutItemsInput";
import { OrderLineItemUpdateManyWithoutSelectedMealItemInput } from "../inputs/OrderLineItemUpdateManyWithoutSelectedMealItemInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class MealItemUpdateInput {
    Meals?: MealUpdateManyWithoutItemsInput | undefined;
    mealIds?: MealItemUpdatemealIdsInput | undefined;
    title?: StringFieldUpdateOperationsInput | undefined;
    shortDescription?: StringFieldUpdateOperationsInput | undefined;
    Options?: MealItemOptionUpdateManyWithoutMealItemInput | undefined;
    OrderLineItems?: OrderLineItemUpdateManyWithoutSelectedMealItemInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
