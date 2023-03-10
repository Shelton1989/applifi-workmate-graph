import { MealOrderByWithRelationInput } from "../inputs/MealOrderByWithRelationInput";
export declare class MealAvailabilityOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    Meal?: MealOrderByWithRelationInput | undefined;
    mealId?: "asc" | "desc" | undefined;
    startDate?: "asc" | "desc" | undefined;
    endDate?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
}
