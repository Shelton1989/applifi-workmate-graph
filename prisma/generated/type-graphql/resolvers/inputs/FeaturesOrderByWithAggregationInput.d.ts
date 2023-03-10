import { FeaturesCountOrderByAggregateInput } from "../inputs/FeaturesCountOrderByAggregateInput";
import { FeaturesMaxOrderByAggregateInput } from "../inputs/FeaturesMaxOrderByAggregateInput";
import { FeaturesMinOrderByAggregateInput } from "../inputs/FeaturesMinOrderByAggregateInput";
export declare class FeaturesOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    mealId?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    shortDescription?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: FeaturesCountOrderByAggregateInput | undefined;
    _max?: FeaturesMaxOrderByAggregateInput | undefined;
    _min?: FeaturesMinOrderByAggregateInput | undefined;
}
