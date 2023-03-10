import { WardAvgOrderByAggregateInput } from "../inputs/WardAvgOrderByAggregateInput";
import { WardCountOrderByAggregateInput } from "../inputs/WardCountOrderByAggregateInput";
import { WardMaxOrderByAggregateInput } from "../inputs/WardMaxOrderByAggregateInput";
import { WardMinOrderByAggregateInput } from "../inputs/WardMinOrderByAggregateInput";
import { WardSumOrderByAggregateInput } from "../inputs/WardSumOrderByAggregateInput";
export declare class WardOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    number?: "asc" | "desc" | undefined;
    name?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: WardCountOrderByAggregateInput | undefined;
    _avg?: WardAvgOrderByAggregateInput | undefined;
    _max?: WardMaxOrderByAggregateInput | undefined;
    _min?: WardMinOrderByAggregateInput | undefined;
    _sum?: WardSumOrderByAggregateInput | undefined;
}
