export declare class ReactionCreateManyInput {
    id?: string | undefined;
    type: "LIKE" | "LOVE" | "DISLIKE";
    mealId?: string | undefined;
    postId?: string | undefined;
    commentId?: string | undefined;
    replyId?: string | undefined;
    authorId: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
