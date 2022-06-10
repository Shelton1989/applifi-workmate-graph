import { SizeCountOrderByAggregateInput } from "../inputs/SizeCountOrderByAggregateInput";
import { SizeMaxOrderByAggregateInput } from "../inputs/SizeMaxOrderByAggregateInput";
import { SizeMinOrderByAggregateInput } from "../inputs/SizeMinOrderByAggregateInput";
export declare class SizeOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    value?: "asc" | "desc" | undefined;
    region?: "asc" | "desc" | undefined;
    productIds?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: SizeCountOrderByAggregateInput | undefined;
    _max?: SizeMaxOrderByAggregateInput | undefined;
    _min?: SizeMinOrderByAggregateInput | undefined;
}
