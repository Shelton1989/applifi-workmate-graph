import { MealItemCreatemealIdsInput } from "../inputs/MealItemCreatemealIdsInput";
import { MealItemOptionCreateNestedManyWithoutMealItemInput } from "../inputs/MealItemOptionCreateNestedManyWithoutMealItemInput";
import { OrderLineItemCreateNestedManyWithoutSelectedMealItemInput } from "../inputs/OrderLineItemCreateNestedManyWithoutSelectedMealItemInput";
export declare class MealItemCreateWithoutMealsInput {
    id?: string | undefined;
    mealIds?: MealItemCreatemealIdsInput | undefined;
    title: string;
    shortDescription: string;
    Options?: MealItemOptionCreateNestedManyWithoutMealItemInput | undefined;
    OrderLineItems?: OrderLineItemCreateNestedManyWithoutSelectedMealItemInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
