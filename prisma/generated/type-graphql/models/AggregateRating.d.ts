import { Meal } from "../models/Meal";
export declare class AggregateRating {
    id: string;
    ratingValue: number;
    countedPosts?: number | null;
    allPosts?: number | null;
    ratingCount?: number | null;
    Meal?: Meal | null;
    mealId?: string | null;
    createdAt: Date;
    updatedAt: Date;
}
