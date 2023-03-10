import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MealItemOptionUpdateManyWithoutMealItemInput } from "../inputs/MealItemOptionUpdateManyWithoutMealItemInput";
import { MealItemUpdatemealIdsInput } from "../inputs/MealItemUpdatemealIdsInput";
import { MealUpdateManyWithoutItemsInput } from "../inputs/MealUpdateManyWithoutItemsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class MealItemUpdateWithoutOrderLineItemsInput {
    Meals?: MealUpdateManyWithoutItemsInput | undefined;
    mealIds?: MealItemUpdatemealIdsInput | undefined;
    title?: StringFieldUpdateOperationsInput | undefined;
    shortDescription?: StringFieldUpdateOperationsInput | undefined;
    Options?: MealItemOptionUpdateManyWithoutMealItemInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
