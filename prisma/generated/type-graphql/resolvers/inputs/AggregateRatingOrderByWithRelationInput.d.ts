import { MealOrderByWithRelationInput } from "../inputs/MealOrderByWithRelationInput";
export declare class AggregateRatingOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    ratingValue?: "asc" | "desc" | undefined;
    countedPosts?: "asc" | "desc" | undefined;
    allPosts?: "asc" | "desc" | undefined;
    ratingCount?: "asc" | "desc" | undefined;
    Meal?: MealOrderByWithRelationInput | undefined;
    mealId?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
}
