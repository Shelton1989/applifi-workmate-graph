export declare class ReactionCreateManyReplyInput {
    id?: string | undefined;
    type: "LIKE" | "LOVE" | "DISLIKE";
    commentId?: string | undefined;
    authorId: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
