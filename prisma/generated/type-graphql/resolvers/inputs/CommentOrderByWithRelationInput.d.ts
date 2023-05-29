import { DocumentOrderByWithRelationInput } from "../inputs/DocumentOrderByWithRelationInput";
import { ReactionOrderByRelationAggregateInput } from "../inputs/ReactionOrderByRelationAggregateInput";
import { ReplyOrderByRelationAggregateInput } from "../inputs/ReplyOrderByRelationAggregateInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class CommentOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    text?: "asc" | "desc" | undefined;
    Document?: DocumentOrderByWithRelationInput | undefined;
    documentId?: "asc" | "desc" | undefined;
    Author?: UserOrderByWithRelationInput | undefined;
    authorId?: "asc" | "desc" | undefined;
    Replies?: ReplyOrderByRelationAggregateInput | undefined;
    Reactions?: ReactionOrderByRelationAggregateInput | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
}
