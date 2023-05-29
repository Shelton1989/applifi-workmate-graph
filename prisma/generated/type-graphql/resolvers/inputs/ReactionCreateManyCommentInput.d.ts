export declare class ReactionCreateManyCommentInput {
    id?: string | undefined;
    type: "LIKE" | "LOVE" | "DISLIKE";
    replyId?: string | undefined;
    authorId: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
