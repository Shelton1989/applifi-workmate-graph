import { PostCreatemediaUrlInput } from "../inputs/PostCreatemediaUrlInput";
export declare class PostCreateManyAuthorInput {
    id?: string | undefined;
    type: "TOPIC" | "SEASON_SERIES" | "EPISODE";
    caption?: string | undefined;
    mediaUrl?: PostCreatemediaUrlInput | undefined;
    rating: number;
    isCommentsEnabled?: boolean | undefined;
    canBeCounted?: boolean | undefined;
    topicId?: string | undefined;
    seasonSeriesId?: string | undefined;
    episodeId?: string | undefined;
    postLink?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
