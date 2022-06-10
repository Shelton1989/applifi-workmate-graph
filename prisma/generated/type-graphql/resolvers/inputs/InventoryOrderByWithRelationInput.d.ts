import { ArtworkOrderByRelationAggregateInput } from "../inputs/ArtworkOrderByRelationAggregateInput";
import { ProductOrderByRelationAggregateInput } from "../inputs/ProductOrderByRelationAggregateInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class InventoryOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    Products?: ProductOrderByRelationAggregateInput | undefined;
    Artwork?: ArtworkOrderByRelationAggregateInput | undefined;
    User?: UserOrderByWithRelationInput | undefined;
    userId?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
}
