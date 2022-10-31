export declare class ReactionCreateManyPostInput {
    id?: string | undefined;
    type: "LIKE" | "LOVE" | "DISLIKE";
    commentId?: string | undefined;
    replyId?: string | undefined;
    authorId: string;
    topicId?: string | undefined;
    seasonSeriesId?: string | undefined;
    episodeId?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
