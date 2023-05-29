export declare class ReactionCreateManyAuthorInput {
    id?: string | undefined;
    type: "LIKE" | "LOVE" | "DISLIKE";
    commentId?: string | undefined;
    replyId?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
