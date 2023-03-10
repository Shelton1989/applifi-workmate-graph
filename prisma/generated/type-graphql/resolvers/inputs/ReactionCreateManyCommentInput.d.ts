export declare class ReactionCreateManyCommentInput {
    id?: string | undefined;
    type: "LIKE" | "LOVE" | "DISLIKE";
    mealId?: string | undefined;
    postId?: string | undefined;
    replyId?: string | undefined;
    authorId: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
