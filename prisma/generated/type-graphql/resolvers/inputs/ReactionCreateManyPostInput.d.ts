export declare class ReactionCreateManyPostInput {
    id?: string | undefined;
    type: "LIKE" | "LOVE" | "DISLIKE";
    mealId?: string | undefined;
    commentId?: string | undefined;
    replyId?: string | undefined;
    authorId: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
