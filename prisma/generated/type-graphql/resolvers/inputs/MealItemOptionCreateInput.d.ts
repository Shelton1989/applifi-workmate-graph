import { MealItemCreateNestedOneWithoutOptionsInput } from "../inputs/MealItemCreateNestedOneWithoutOptionsInput";
import { OrderLineItemCreateNestedManyWithoutSelectedMealItemOptionInput } from "../inputs/OrderLineItemCreateNestedManyWithoutSelectedMealItemOptionInput";
export declare class MealItemOptionCreateInput {
    id?: string | undefined;
    MealItem: MealItemCreateNestedOneWithoutOptionsInput;
    title: string;
    shortDescription: string;
    OrderLineItems?: OrderLineItemCreateNestedManyWithoutSelectedMealItemOptionInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
