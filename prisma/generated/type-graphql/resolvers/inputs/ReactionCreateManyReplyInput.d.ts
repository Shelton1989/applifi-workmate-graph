export declare class ReactionCreateManyReplyInput {
    id?: string | undefined;
    type: "LIKE" | "LOVE" | "DISLIKE";
    mealId?: string | undefined;
    postId?: string | undefined;
    commentId?: string | undefined;
    authorId: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
