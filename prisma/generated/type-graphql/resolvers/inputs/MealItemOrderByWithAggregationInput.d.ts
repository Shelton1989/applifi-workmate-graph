import { MealItemCountOrderByAggregateInput } from "../inputs/MealItemCountOrderByAggregateInput";
import { MealItemMaxOrderByAggregateInput } from "../inputs/MealItemMaxOrderByAggregateInput";
import { MealItemMinOrderByAggregateInput } from "../inputs/MealItemMinOrderByAggregateInput";
export declare class MealItemOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    mealIds?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    shortDescription?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: MealItemCountOrderByAggregateInput | undefined;
    _max?: MealItemMaxOrderByAggregateInput | undefined;
    _min?: MealItemMinOrderByAggregateInput | undefined;
}
