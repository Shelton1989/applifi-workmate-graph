import { AggregateRatingCreateNestedOneWithoutEpisodeInput } from "../inputs/AggregateRatingCreateNestedOneWithoutEpisodeInput";
import { PostCreateNestedManyWithoutEpisodeInput } from "../inputs/PostCreateNestedManyWithoutEpisodeInput";
import { SeasonSeriesCreateNestedOneWithoutEpisodesInput } from "../inputs/SeasonSeriesCreateNestedOneWithoutEpisodesInput";
export declare class EpisodeCreateWithoutReactionsInput {
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
    AggregateRating?: AggregateRatingCreateNestedOneWithoutEpisodeInput | undefined;
    Posts?: PostCreateNestedManyWithoutEpisodeInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
