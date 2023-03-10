import { MealCreateNestedManyWithoutItemsInput } from "../inputs/MealCreateNestedManyWithoutItemsInput";
import { MealItemCreatemealIdsInput } from "../inputs/MealItemCreatemealIdsInput";
import { MealItemOptionCreateNestedManyWithoutMealItemInput } from "../inputs/MealItemOptionCreateNestedManyWithoutMealItemInput";
export declare class MealItemCreateWithoutOrderLineItemsInput {
    id?: string | undefined;
    Meals?: MealCreateNestedManyWithoutItemsInput | undefined;
    mealIds?: MealItemCreatemealIdsInput | undefined;
    title: string;
    shortDescription: string;
    Options?: MealItemOptionCreateNestedManyWithoutMealItemInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
