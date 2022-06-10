export declare class ReactionCreateManyAuthorInput {
    id?: string | undefined;
    type: "LIKE" | "LOVE" | "DISLIKE";
    postId?: string | undefined;
    commentId?: string | undefined;
    replyId?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
