export declare class ReactionCreateManyPostInput {
    id?: string | undefined;
    type: "LIKE" | "LOVE" | "DISLIKE";
    experienceId?: string | undefined;
    commentId?: string | undefined;
    replyId?: string | undefined;
    authorId: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
