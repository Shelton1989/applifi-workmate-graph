import { MealCreateNestedManyWithoutItemsInput } from "../inputs/MealCreateNestedManyWithoutItemsInput";
import { MealItemCreatemealIdsInput } from "../inputs/MealItemCreatemealIdsInput";
import { OrderLineItemCreateNestedManyWithoutSelectedMealItemInput } from "../inputs/OrderLineItemCreateNestedManyWithoutSelectedMealItemInput";
export declare class MealItemCreateWithoutOptionsInput {
    id?: string | undefined;
    Meals?: MealCreateNestedManyWithoutItemsInput | undefined;
    mealIds?: MealItemCreatemealIdsInput | undefined;
    title: string;
    shortDescription: string;
    OrderLineItems?: OrderLineItemCreateNestedManyWithoutSelectedMealItemInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
