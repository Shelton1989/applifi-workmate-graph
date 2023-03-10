import { MealItemCreateNestedOneWithoutOrderLineItemsInput } from "../inputs/MealItemCreateNestedOneWithoutOrderLineItemsInput";
import { MealItemOptionCreateNestedOneWithoutOrderLineItemsInput } from "../inputs/MealItemOptionCreateNestedOneWithoutOrderLineItemsInput";
export declare class OrderLineItemCreateWithoutBookingInput {
    id?: string | undefined;
    details?: string | undefined;
    comments?: string | undefined;
    selectedMealItem?: MealItemCreateNestedOneWithoutOrderLineItemsInput | undefined;
    selectedMealItemOption?: MealItemOptionCreateNestedOneWithoutOrderLineItemsInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
