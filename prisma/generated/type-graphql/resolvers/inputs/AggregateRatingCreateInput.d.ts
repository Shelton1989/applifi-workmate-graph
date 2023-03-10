import { MealCreateNestedOneWithoutAggregateRatingInput } from "../inputs/MealCreateNestedOneWithoutAggregateRatingInput";
export declare class AggregateRatingCreateInput {
    id?: string | undefined;
    ratingValue: number;
    countedPosts?: number | undefined;
    allPosts?: number | undefined;
    ratingCount?: number | undefined;
    Meal?: MealCreateNestedOneWithoutAggregateRatingInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
