import { CommentCountOrderByAggregateInput } from "../inputs/CommentCountOrderByAggregateInput";
import { CommentMaxOrderByAggregateInput } from "../inputs/CommentMaxOrderByAggregateInput";
import { CommentMinOrderByAggregateInput } from "../inputs/CommentMinOrderByAggregateInput";
export declare class CommentOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    text?: "asc" | "desc" | undefined;
    documentId?: "asc" | "desc" | undefined;
    authorId?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: CommentCountOrderByAggregateInput | undefined;
    _max?: CommentMaxOrderByAggregateInput | undefined;
    _min?: CommentMinOrderByAggregateInput | undefined;
}
