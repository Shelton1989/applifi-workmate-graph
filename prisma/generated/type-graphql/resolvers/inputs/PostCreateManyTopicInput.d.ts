import { PostCreatemediaUrlInput } from "../inputs/PostCreatemediaUrlInput";
export declare class PostCreateManyTopicInput {
    id?: string | undefined;
    type: "TOPIC" | "SEASON_SERIES" | "EPISODE";
    caption?: string | undefined;
    mediaUrl?: PostCreatemediaUrlInput | undefined;
    rating: number;
    isCommentsEnabled?: boolean | undefined;
    canBeCounted?: boolean | undefined;
    authorId: string;
    seasonSeriesId?: string | undefined;
    episodeId?: string | undefined;
    postLink?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
