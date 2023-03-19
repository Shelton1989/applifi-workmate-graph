import { MealCountOrderByAggregateInput } from "../inputs/MealCountOrderByAggregateInput";
import { MealMaxOrderByAggregateInput } from "../inputs/MealMaxOrderByAggregateInput";
import { MealMinOrderByAggregateInput } from "../inputs/MealMinOrderByAggregateInput";
export declare class MealOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    tenantId?: "asc" | "desc" | undefined;
    productLink?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    dietaryRestrictions?: "asc" | "desc" | undefined;
    mealTypes?: "asc" | "desc" | undefined;
    mealKinds?: "asc" | "desc" | undefined;
    doctorSpecificDiets?: "asc" | "desc" | undefined;
    specialDiets?: "asc" | "desc" | undefined;
    itemIds?: "asc" | "desc" | undefined;
    photo?: "asc" | "desc" | undefined;
    gallery?: "asc" | "desc" | undefined;
    publishStatus?: "asc" | "desc" | undefined;
    likedByIds?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: MealCountOrderByAggregateInput | undefined;
    _max?: MealMaxOrderByAggregateInput | undefined;
    _min?: MealMinOrderByAggregateInput | undefined;
}
