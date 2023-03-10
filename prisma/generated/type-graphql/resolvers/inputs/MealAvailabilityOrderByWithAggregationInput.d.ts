import { MealAvailabilityCountOrderByAggregateInput } from "../inputs/MealAvailabilityCountOrderByAggregateInput";
import { MealAvailabilityMaxOrderByAggregateInput } from "../inputs/MealAvailabilityMaxOrderByAggregateInput";
import { MealAvailabilityMinOrderByAggregateInput } from "../inputs/MealAvailabilityMinOrderByAggregateInput";
export declare class MealAvailabilityOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    mealId?: "asc" | "desc" | undefined;
    startDate?: "asc" | "desc" | undefined;
    endDate?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: MealAvailabilityCountOrderByAggregateInput | undefined;
    _max?: MealAvailabilityMaxOrderByAggregateInput | undefined;
    _min?: MealAvailabilityMinOrderByAggregateInput | undefined;
}
