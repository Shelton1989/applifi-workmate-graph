import { InventoryOrderByWithRelationInput } from "../inputs/InventoryOrderByWithRelationInput";
import { OrderLineItemOrderByRelationAggregateInput } from "../inputs/OrderLineItemOrderByRelationAggregateInput";
import { ProductOrderByRelationAggregateInput } from "../inputs/ProductOrderByRelationAggregateInput";
export declare class ArtworkOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    caption?: "asc" | "desc" | undefined;
    url?: "asc" | "desc" | undefined;
    Products?: ProductOrderByRelationAggregateInput | undefined;
    productIds?: "asc" | "desc" | undefined;
    Inventory?: InventoryOrderByWithRelationInput | undefined;
    inventoryId?: "asc" | "desc" | undefined;
    OrderLineItems?: OrderLineItemOrderByRelationAggregateInput | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
}
