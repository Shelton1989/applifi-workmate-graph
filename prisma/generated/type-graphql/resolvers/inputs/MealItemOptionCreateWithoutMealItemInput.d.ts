import { OrderLineItemCreateNestedManyWithoutSelectedMealItemOptionInput } from "../inputs/OrderLineItemCreateNestedManyWithoutSelectedMealItemOptionInput";
export declare class MealItemOptionCreateWithoutMealItemInput {
    id?: string | undefined;
    title: string;
    shortDescription: string;
    OrderLineItems?: OrderLineItemCreateNestedManyWithoutSelectedMealItemOptionInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
