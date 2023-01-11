import { CommentOrderByWithRelationInput } from "../inputs/CommentOrderByWithRelationInput";
import { PostOrderByWithRelationInput } from "../inputs/PostOrderByWithRelationInput";
import { ReplyOrderByWithRelationInput } from "../inputs/ReplyOrderByWithRelationInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class ReactionOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    type?: "asc" | "desc" | undefined;
    Post?: PostOrderByWithRelationInput | undefined;
    postId?: "asc" | "desc" | undefined;
    Comment?: CommentOrderByWithRelationInput | undefined;
    commentId?: "asc" | "desc" | undefined;
    Reply?: ReplyOrderByWithRelationInput | undefined;
    replyId?: "asc" | "desc" | undefined;
    Author?: UserOrderByWithRelationInput | undefined;
    authorId?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
}
