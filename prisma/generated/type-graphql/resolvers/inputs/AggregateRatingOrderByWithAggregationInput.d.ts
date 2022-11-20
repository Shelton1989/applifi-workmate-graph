import { AggregateRatingAvgOrderByAggregateInput } from "../inputs/AggregateRatingAvgOrderByAggregateInput";
import { AggregateRatingCountOrderByAggregateInput } from "../inputs/AggregateRatingCountOrderByAggregateInput";
import { AggregateRatingMaxOrderByAggregateInput } from "../inputs/AggregateRatingMaxOrderByAggregateInput";
import { AggregateRatingMinOrderByAggregateInput } from "../inputs/AggregateRatingMinOrderByAggregateInput";
import { AggregateRatingSumOrderByAggregateInput } from "../inputs/AggregateRatingSumOrderByAggregateInput";
export declare class AggregateRatingOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    ratingValue?: "asc" | "desc" | undefined;
    countedPosts?: "asc" | "desc" | undefined;
    allPosts?: "asc" | "desc" | undefined;
    ratingCount?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: AggregateRatingCountOrderByAggregateInput | undefined;
    _avg?: AggregateRatingAvgOrderByAggregateInput | undefined;
    _max?: AggregateRatingMaxOrderByAggregateInput | undefined;
    _min?: AggregateRatingMinOrderByAggregateInput | undefined;
    _sum?: AggregateRatingSumOrderByAggregateInput | undefined;
}
