import { MealItemOptionOrderByRelationAggregateInput } from "../inputs/MealItemOptionOrderByRelationAggregateInput";
import { MealOrderByRelationAggregateInput } from "../inputs/MealOrderByRelationAggregateInput";
import { OrderLineItemOrderByRelationAggregateInput } from "../inputs/OrderLineItemOrderByRelationAggregateInput";
export declare class MealItemOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    Meals?: MealOrderByRelationAggregateInput | undefined;
    mealIds?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    shortDescription?: "asc" | "desc" | undefined;
    Options?: MealItemOptionOrderByRelationAggregateInput | undefined;
    OrderLineItems?: OrderLineItemOrderByRelationAggregateInput | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
}
