import { ReactionCountOrderByAggregateInput } from "../inputs/ReactionCountOrderByAggregateInput";
import { ReactionMaxOrderByAggregateInput } from "../inputs/ReactionMaxOrderByAggregateInput";
import { ReactionMinOrderByAggregateInput } from "../inputs/ReactionMinOrderByAggregateInput";
export declare class ReactionOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    type?: "asc" | "desc" | undefined;
    experienceId?: "asc" | "desc" | undefined;
    postId?: "asc" | "desc" | undefined;
    commentId?: "asc" | "desc" | undefined;
    replyId?: "asc" | "desc" | undefined;
    authorId?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: ReactionCountOrderByAggregateInput | undefined;
    _max?: ReactionMaxOrderByAggregateInput | undefined;
    _min?: ReactionMinOrderByAggregateInput | undefined;
}
