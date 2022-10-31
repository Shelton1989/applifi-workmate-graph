export declare class ReactionCreateManyTopicInput {
    id?: string | undefined;
    type: "LIKE" | "LOVE" | "DISLIKE";
    postId?: string | undefined;
    commentId?: string | undefined;
    replyId?: string | undefined;
    authorId: string;
    seasonSeriesId?: string | undefined;
    episodeId?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
