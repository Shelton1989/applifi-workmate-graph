import { MealOrderByWithRelationInput } from "../inputs/MealOrderByWithRelationInput";
export declare class FeaturesOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    Meal?: MealOrderByWithRelationInput | undefined;
    mealId?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    shortDescription?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
}
