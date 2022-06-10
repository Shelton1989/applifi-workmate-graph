export declare class ReactionCreateManyPostInput {
    id?: string | undefined;
    type: "LIKE" | "LOVE" | "DISLIKE";
    commentId?: string | undefined;
    replyId?: string | undefined;
    authorId: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
