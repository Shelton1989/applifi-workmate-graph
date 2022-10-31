export declare class ReactionCreateManyEpisodeInput {
    id?: string | undefined;
    type: "LIKE" | "LOVE" | "DISLIKE";
    postId?: string | undefined;
    commentId?: string | undefined;
    replyId?: string | undefined;
    authorId: string;
    topicId?: string | undefined;
    seasonSeriesId?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
