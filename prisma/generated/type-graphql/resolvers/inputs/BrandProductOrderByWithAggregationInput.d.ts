import { BrandProductCountOrderByAggregateInput } from "../inputs/BrandProductCountOrderByAggregateInput";
import { BrandProductMaxOrderByAggregateInput } from "../inputs/BrandProductMaxOrderByAggregateInput";
import { BrandProductMinOrderByAggregateInput } from "../inputs/BrandProductMinOrderByAggregateInput";
export declare class BrandProductOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    releaseYear?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    type?: "asc" | "desc" | undefined;
    category?: "asc" | "desc" | undefined;
    brandId?: "asc" | "desc" | undefined;
    status?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: BrandProductCountOrderByAggregateInput | undefined;
    _max?: BrandProductMaxOrderByAggregateInput | undefined;
    _min?: BrandProductMinOrderByAggregateInput | undefined;
}
