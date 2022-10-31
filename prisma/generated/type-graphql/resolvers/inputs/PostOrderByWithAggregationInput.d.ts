import { PostAvgOrderByAggregateInput } from "../inputs/PostAvgOrderByAggregateInput";
import { PostCountOrderByAggregateInput } from "../inputs/PostCountOrderByAggregateInput";
import { PostMaxOrderByAggregateInput } from "../inputs/PostMaxOrderByAggregateInput";
import { PostMinOrderByAggregateInput } from "../inputs/PostMinOrderByAggregateInput";
import { PostSumOrderByAggregateInput } from "../inputs/PostSumOrderByAggregateInput";
export declare class PostOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    type?: "asc" | "desc" | undefined;
    caption?: "asc" | "desc" | undefined;
    mediaUrl?: "asc" | "desc" | undefined;
    rating?: "asc" | "desc" | undefined;
    isCommentsEnabled?: "asc" | "desc" | undefined;
    canBeCounted?: "asc" | "desc" | undefined;
    authorId?: "asc" | "desc" | undefined;
    topicId?: "asc" | "desc" | undefined;
    seasonSeriesId?: "asc" | "desc" | undefined;
    episodeId?: "asc" | "desc" | undefined;
    postLink?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: PostCountOrderByAggregateInput | undefined;
    _avg?: PostAvgOrderByAggregateInput | undefined;
    _max?: PostMaxOrderByAggregateInput | undefined;
    _min?: PostMinOrderByAggregateInput | undefined;
    _sum?: PostSumOrderByAggregateInput | undefined;
}
