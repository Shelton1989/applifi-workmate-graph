import { AggregateRatingCreateNestedOneWithoutEpisodeInput } from "../inputs/AggregateRatingCreateNestedOneWithoutEpisodeInput";
import { PostCreateNestedManyWithoutEpisodeInput } from "../inputs/PostCreateNestedManyWithoutEpisodeInput";
import { ReactionCreateNestedManyWithoutEpisodeInput } from "../inputs/ReactionCreateNestedManyWithoutEpisodeInput";
export declare class EpisodeCreateWithoutSeasonSeriesInput {
    id?: string | undefined;
    episodeNumber: number;
    title: string;
    year: string;
    poster: string;
    overview: string;
    trailer: string;
    coverImage: string;
    tagline: string;
    releaseDate: Date;
    AggregateRating?: AggregateRatingCreateNestedOneWithoutEpisodeInput | undefined;
    Reactions?: ReactionCreateNestedManyWithoutEpisodeInput | undefined;
    Posts?: PostCreateNestedManyWithoutEpisodeInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
