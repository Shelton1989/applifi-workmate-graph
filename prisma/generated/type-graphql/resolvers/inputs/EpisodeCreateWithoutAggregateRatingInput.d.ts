import { PostCreateNestedManyWithoutEpisodeInput } from "../inputs/PostCreateNestedManyWithoutEpisodeInput";
import { ReactionCreateNestedManyWithoutEpisodeInput } from "../inputs/ReactionCreateNestedManyWithoutEpisodeInput";
import { SeasonSeriesCreateNestedOneWithoutEpisodesInput } from "../inputs/SeasonSeriesCreateNestedOneWithoutEpisodesInput";
export declare class EpisodeCreateWithoutAggregateRatingInput {
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
    SeasonSeries: SeasonSeriesCreateNestedOneWithoutEpisodesInput;
    Reactions?: ReactionCreateNestedManyWithoutEpisodeInput | undefined;
    Posts?: PostCreateNestedManyWithoutEpisodeInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
