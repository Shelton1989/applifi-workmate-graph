import { AggregateRatingCreateNestedOneWithoutSeasonSeriesInput } from "../inputs/AggregateRatingCreateNestedOneWithoutSeasonSeriesInput";
import { EpisodeCreateNestedManyWithoutSeasonSeriesInput } from "../inputs/EpisodeCreateNestedManyWithoutSeasonSeriesInput";
import { PostCreateNestedManyWithoutSeasonSeriesInput } from "../inputs/PostCreateNestedManyWithoutSeasonSeriesInput";
import { ReactionCreateNestedManyWithoutSeasonSeriesInput } from "../inputs/ReactionCreateNestedManyWithoutSeasonSeriesInput";
export declare class SeasonSeriesCreateWithoutTopicInput {
    id?: string | undefined;
    seasonOrSeriesNumber: number;
    title: string;
    year: string;
    poster: string;
    overview: string;
    trailer: string;
    coverImage: string;
    tagline: string;
    releaseDate: Date;
    AggregateRating?: AggregateRatingCreateNestedOneWithoutSeasonSeriesInput | undefined;
    Reactions?: ReactionCreateNestedManyWithoutSeasonSeriesInput | undefined;
    Episodes?: EpisodeCreateNestedManyWithoutSeasonSeriesInput | undefined;
    Posts?: PostCreateNestedManyWithoutSeasonSeriesInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
