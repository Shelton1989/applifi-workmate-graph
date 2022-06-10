import { ColorCountOrderByAggregateInput } from "../inputs/ColorCountOrderByAggregateInput";
import { ColorMaxOrderByAggregateInput } from "../inputs/ColorMaxOrderByAggregateInput";
import { ColorMinOrderByAggregateInput } from "../inputs/ColorMinOrderByAggregateInput";
export declare class ColorOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    hex?: "asc" | "desc" | undefined;
    productIds?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: ColorCountOrderByAggregateInput | undefined;
    _max?: ColorMaxOrderByAggregateInput | undefined;
    _min?: ColorMinOrderByAggregateInput | undefined;
}
