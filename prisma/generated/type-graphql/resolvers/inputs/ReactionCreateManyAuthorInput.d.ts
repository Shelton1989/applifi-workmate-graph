export declare class ReactionCreateManyAuthorInput {
    id?: string | undefined;
    type: "LIKE" | "LOVE" | "DISLIKE";
    postId?: string | undefined;
    commentId?: string | undefined;
    replyId?: string | undefined;
    topicId?: string | undefined;
    seasonSeriesId?: string | undefined;
    episodeId?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
