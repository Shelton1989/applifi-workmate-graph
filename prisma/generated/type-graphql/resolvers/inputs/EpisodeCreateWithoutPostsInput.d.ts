import { AggregateRatingCreateNestedOneWithoutEpisodeInput } from "../inputs/AggregateRatingCreateNestedOneWithoutEpisodeInput";
import { ReactionCreateNestedManyWithoutEpisodeInput } from "../inputs/ReactionCreateNestedManyWithoutEpisodeInput";
import { SeasonSeriesCreateNestedOneWithoutEpisodesInput } from "../inputs/SeasonSeriesCreateNestedOneWithoutEpisodesInput";
export declare class EpisodeCreateWithoutPostsInput {
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
    Reactions?: ReactionCreateNestedManyWithoutEpisodeInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
