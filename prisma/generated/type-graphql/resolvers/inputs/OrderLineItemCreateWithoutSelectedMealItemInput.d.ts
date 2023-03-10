import { MealItemOptionCreateNestedOneWithoutOrderLineItemsInput } from "../inputs/MealItemOptionCreateNestedOneWithoutOrderLineItemsInput";
import { OrderCreateNestedOneWithoutItemsInput } from "../inputs/OrderCreateNestedOneWithoutItemsInput";
export declare class OrderLineItemCreateWithoutSelectedMealItemInput {
    id?: string | undefined;
    details?: string | undefined;
    comments?: string | undefined;
    selectedMealItemOption?: MealItemOptionCreateNestedOneWithoutOrderLineItemsInput | undefined;
    Booking: OrderCreateNestedOneWithoutItemsInput;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
