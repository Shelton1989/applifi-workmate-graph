import { MealItemCreateNestedOneWithoutOrderLineItemsInput } from "../inputs/MealItemCreateNestedOneWithoutOrderLineItemsInput";
import { MealItemOptionCreateNestedOneWithoutOrderLineItemsInput } from "../inputs/MealItemOptionCreateNestedOneWithoutOrderLineItemsInput";
import { OrderCreateNestedOneWithoutItemsInput } from "../inputs/OrderCreateNestedOneWithoutItemsInput";
export declare class OrderLineItemCreateInput {
    id?: string | undefined;
    details?: string | undefined;
    comments?: string | undefined;
    selectedMealItem?: MealItemCreateNestedOneWithoutOrderLineItemsInput | undefined;
    selectedMealItemOption?: MealItemOptionCreateNestedOneWithoutOrderLineItemsInput | undefined;
    Booking: OrderCreateNestedOneWithoutItemsInput;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
