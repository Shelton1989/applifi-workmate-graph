import { ProductAvgOrderByAggregateInput } from "../inputs/ProductAvgOrderByAggregateInput";
import { ProductCountOrderByAggregateInput } from "../inputs/ProductCountOrderByAggregateInput";
import { ProductMaxOrderByAggregateInput } from "../inputs/ProductMaxOrderByAggregateInput";
import { ProductMinOrderByAggregateInput } from "../inputs/ProductMinOrderByAggregateInput";
import { ProductSumOrderByAggregateInput } from "../inputs/ProductSumOrderByAggregateInput";
export declare class ProductOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    publishStatus?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    priceId?: "asc" | "desc" | undefined;
    availableQuantity?: "asc" | "desc" | undefined;
    photo?: "asc" | "desc" | undefined;
    gallery?: "asc" | "desc" | undefined;
    baseProductId?: "asc" | "desc" | undefined;
    artworkIds?: "asc" | "desc" | undefined;
    colorIds?: "asc" | "desc" | undefined;
    sizeIds?: "asc" | "desc" | undefined;
    likedByIds?: "asc" | "desc" | undefined;
    inventoryId?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: ProductCountOrderByAggregateInput | undefined;
    _avg?: ProductAvgOrderByAggregateInput | undefined;
    _max?: ProductMaxOrderByAggregateInput | undefined;
    _min?: ProductMinOrderByAggregateInput | undefined;
    _sum?: ProductSumOrderByAggregateInput | undefined;
}
