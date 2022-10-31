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
    SeasonSeries: SeasonSeriesCreateNestedOneWithoutEpisodesInput;
    Reactions?: ReactionCreateNestedManyWithoutEpisodeInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
