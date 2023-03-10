import { AggregateRatingOrderByWithAggregationInput } from "../../../inputs/AggregateRatingOrderByWithAggregationInput";
import { AggregateRatingScalarWhereWithAggregatesInput } from "../../../inputs/AggregateRatingScalarWhereWithAggregatesInput";
import { AggregateRatingWhereInput } from "../../../inputs/AggregateRatingWhereInput";
export declare class GroupByAggregateRatingArgs {
    where?: AggregateRatingWhereInput | undefined;
    orderBy?: AggregateRatingOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "ratingValue" | "countedPosts" | "allPosts" | "ratingCount" | "mealId" | "createdAt" | "updatedAt">;
    having?: AggregateRatingScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
