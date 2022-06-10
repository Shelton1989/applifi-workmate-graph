import { BrandCountOrderByAggregateInput } from "../inputs/BrandCountOrderByAggregateInput";
import { BrandMaxOrderByAggregateInput } from "../inputs/BrandMaxOrderByAggregateInput";
import { BrandMinOrderByAggregateInput } from "../inputs/BrandMinOrderByAggregateInput";
export declare class BrandOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    tagline?: "asc" | "desc" | undefined;
    status?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: BrandCountOrderByAggregateInput | undefined;
    _max?: BrandMaxOrderByAggregateInput | undefined;
    _min?: BrandMinOrderByAggregateInput | undefined;
}
