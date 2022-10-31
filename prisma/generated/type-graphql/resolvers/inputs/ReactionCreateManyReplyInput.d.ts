export declare class ReactionCreateManyReplyInput {
    id?: string | undefined;
    type: "LIKE" | "LOVE" | "DISLIKE";
    postId?: string | undefined;
    commentId?: string | undefined;
    authorId: string;
    topicId?: string | undefined;
    seasonSeriesId?: string | undefined;
    episodeId?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
