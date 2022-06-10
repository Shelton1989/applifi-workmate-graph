import { OrderLineItemOrderByRelationAggregateInput } from "../inputs/OrderLineItemOrderByRelationAggregateInput";
import { ProductOrderByRelationAggregateInput } from "../inputs/ProductOrderByRelationAggregateInput";
export declare class SizeOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    value?: "asc" | "desc" | undefined;
    region?: "asc" | "desc" | undefined;
    Products?: ProductOrderByRelationAggregateInput | undefined;
    productIds?: "asc" | "desc" | undefined;
    OrderLineItems?: OrderLineItemOrderByRelationAggregateInput | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
}
