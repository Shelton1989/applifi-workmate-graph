import { MealItemOptionCountOrderByAggregateInput } from "../inputs/MealItemOptionCountOrderByAggregateInput";
import { MealItemOptionMaxOrderByAggregateInput } from "../inputs/MealItemOptionMaxOrderByAggregateInput";
import { MealItemOptionMinOrderByAggregateInput } from "../inputs/MealItemOptionMinOrderByAggregateInput";
export declare class MealItemOptionOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    mealItemId?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    shortDescription?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: MealItemOptionCountOrderByAggregateInput | undefined;
    _max?: MealItemOptionMaxOrderByAggregateInput | undefined;
    _min?: MealItemOptionMinOrderByAggregateInput | undefined;
}
