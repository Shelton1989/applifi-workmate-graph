export declare class ReactionCreateManySeasonSeriesInput {
    id?: string | undefined;
    type: "LIKE" | "LOVE" | "DISLIKE";
    postId?: string | undefined;
    commentId?: string | undefined;
    replyId?: string | undefined;
    authorId: string;
    topicId?: string | undefined;
    episodeId?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
