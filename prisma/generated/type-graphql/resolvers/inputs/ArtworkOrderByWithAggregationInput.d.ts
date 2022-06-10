import { ArtworkCountOrderByAggregateInput } from "../inputs/ArtworkCountOrderByAggregateInput";
import { ArtworkMaxOrderByAggregateInput } from "../inputs/ArtworkMaxOrderByAggregateInput";
import { ArtworkMinOrderByAggregateInput } from "../inputs/ArtworkMinOrderByAggregateInput";
export declare class ArtworkOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    caption?: "asc" | "desc" | undefined;
    url?: "asc" | "desc" | undefined;
    productIds?: "asc" | "desc" | undefined;
    inventoryId?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: ArtworkCountOrderByAggregateInput | undefined;
    _max?: ArtworkMaxOrderByAggregateInput | undefined;
    _min?: ArtworkMinOrderByAggregateInput | undefined;
}
