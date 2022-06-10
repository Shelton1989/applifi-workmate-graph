import { OrderLineItemCountOrderByAggregateInput } from "../inputs/OrderLineItemCountOrderByAggregateInput";
import { OrderLineItemMaxOrderByAggregateInput } from "../inputs/OrderLineItemMaxOrderByAggregateInput";
import { OrderLineItemMinOrderByAggregateInput } from "../inputs/OrderLineItemMinOrderByAggregateInput";
export declare class OrderLineItemOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    priceId?: "asc" | "desc" | undefined;
    selectedProductId?: "asc" | "desc" | undefined;
    selectedColorId?: "asc" | "desc" | undefined;
    selectedArtworkId?: "asc" | "desc" | undefined;
    selectedSizeId?: "asc" | "desc" | undefined;
    orderId?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: OrderLineItemCountOrderByAggregateInput | undefined;
    _max?: OrderLineItemMaxOrderByAggregateInput | undefined;
    _min?: OrderLineItemMinOrderByAggregateInput | undefined;
}
