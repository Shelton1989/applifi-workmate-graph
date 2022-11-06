import { EpisodeCreateNestedManyWithoutSeasonSeriesInput } from "../inputs/EpisodeCreateNestedManyWithoutSeasonSeriesInput";
import { PostCreateNestedManyWithoutSeasonSeriesInput } from "../inputs/PostCreateNestedManyWithoutSeasonSeriesInput";
import { ReactionCreateNestedManyWithoutSeasonSeriesInput } from "../inputs/ReactionCreateNestedManyWithoutSeasonSeriesInput";
import { TopicCreateNestedOneWithoutSeasonSeriesInput } from "../inputs/TopicCreateNestedOneWithoutSeasonSeriesInput";
export declare class SeasonSeriesCreateWithoutAggregateRatingInput {
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
    Topic: TopicCreateNestedOneWithoutSeasonSeriesInput;
    Reactions?: ReactionCreateNestedManyWithoutSeasonSeriesInput | undefined;
    Episodes?: EpisodeCreateNestedManyWithoutSeasonSeriesInput | undefined;
    Posts?: PostCreateNestedManyWithoutSeasonSeriesInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
