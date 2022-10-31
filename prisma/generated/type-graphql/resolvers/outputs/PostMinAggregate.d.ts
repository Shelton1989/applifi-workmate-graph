export declare class PostMinAggregate {
    id: string | null;
    type: "TOPIC" | "SEASON_SERIES" | "EPISODE" | null;
    caption: string | null;
    rating: number | null;
    isCommentsEnabled: boolean | null;
    canBeCounted: boolean | null;
    authorId: string | null;
    topicId: string | null;
    seasonSeriesId: string | null;
    episodeId: string | null;
    postLink: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
}
