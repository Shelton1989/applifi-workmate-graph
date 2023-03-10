import { MealItemOrderByWithRelationInput } from "../inputs/MealItemOrderByWithRelationInput";
import { OrderLineItemOrderByRelationAggregateInput } from "../inputs/OrderLineItemOrderByRelationAggregateInput";
export declare class MealItemOptionOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    MealItem?: MealItemOrderByWithRelationInput | undefined;
    mealItemId?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    shortDescription?: "asc" | "desc" | undefined;
    OrderLineItems?: OrderLineItemOrderByRelationAggregateInput | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
}
