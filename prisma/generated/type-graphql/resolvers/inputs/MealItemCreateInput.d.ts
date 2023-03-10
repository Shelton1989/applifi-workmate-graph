import { MealCreateNestedManyWithoutItemsInput } from "../inputs/MealCreateNestedManyWithoutItemsInput";
import { MealItemCreatemealIdsInput } from "../inputs/MealItemCreatemealIdsInput";
import { MealItemOptionCreateNestedManyWithoutMealItemInput } from "../inputs/MealItemOptionCreateNestedManyWithoutMealItemInput";
import { OrderLineItemCreateNestedManyWithoutSelectedMealItemInput } from "../inputs/OrderLineItemCreateNestedManyWithoutSelectedMealItemInput";
export declare class MealItemCreateInput {
    id?: string | undefined;
    Meals?: MealCreateNestedManyWithoutItemsInput | undefined;
    mealIds?: MealItemCreatemealIdsInput | undefined;
    title: string;
    shortDescription: string;
    Options?: MealItemOptionCreateNestedManyWithoutMealItemInput | undefined;
    OrderLineItems?: OrderLineItemCreateNestedManyWithoutSelectedMealItemInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
