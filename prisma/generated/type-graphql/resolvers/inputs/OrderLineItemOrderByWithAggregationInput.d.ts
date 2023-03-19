import { OrderLineItemCountOrderByAggregateInput } from "../inputs/OrderLineItemCountOrderByAggregateInput";
import { OrderLineItemMaxOrderByAggregateInput } from "../inputs/OrderLineItemMaxOrderByAggregateInput";
import { OrderLineItemMinOrderByAggregateInput } from "../inputs/OrderLineItemMinOrderByAggregateInput";
export declare class OrderLineItemOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    details?: "asc" | "desc" | undefined;
    comments?: "asc" | "desc" | undefined;
    mealItemId?: "asc" | "desc" | undefined;
    mealItemOptionId?: "asc" | "desc" | undefined;
    orderId?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: OrderLineItemCountOrderByAggregateInput | undefined;
    _max?: OrderLineItemMaxOrderByAggregateInput | undefined;
    _min?: OrderLineItemMinOrderByAggregateInput | undefined;
}
