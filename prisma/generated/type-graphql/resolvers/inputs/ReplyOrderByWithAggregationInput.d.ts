import { ReplyCountOrderByAggregateInput } from "../inputs/ReplyCountOrderByAggregateInput";
import { ReplyMaxOrderByAggregateInput } from "../inputs/ReplyMaxOrderByAggregateInput";
import { ReplyMinOrderByAggregateInput } from "../inputs/ReplyMinOrderByAggregateInput";
export declare class ReplyOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    text?: "asc" | "desc" | undefined;
    commentId?: "asc" | "desc" | undefined;
    authorId?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: ReplyCountOrderByAggregateInput | undefined;
    _max?: ReplyMaxOrderByAggregateInput | undefined;
    _min?: ReplyMinOrderByAggregateInput | undefined;
}
