import { MealItemCreateNestedOneWithoutOrderLineItemsInput } from "../inputs/MealItemCreateNestedOneWithoutOrderLineItemsInput";
import { OrderCreateNestedOneWithoutItemsInput } from "../inputs/OrderCreateNestedOneWithoutItemsInput";
export declare class OrderLineItemCreateWithoutSelectedMealItemOptionInput {
    id?: string | undefined;
    details?: string | undefined;
    comments?: string | undefined;
    selectedMealItem?: MealItemCreateNestedOneWithoutOrderLineItemsInput | undefined;
    Booking: OrderCreateNestedOneWithoutItemsInput;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
