import { EpisodeCreateNestedManyWithoutSeasonSeriesInput } from "../inputs/EpisodeCreateNestedManyWithoutSeasonSeriesInput";
import { PostCreateNestedManyWithoutSeasonSeriesInput } from "../inputs/PostCreateNestedManyWithoutSeasonSeriesInput";
import { TopicCreateNestedOneWithoutSeasonSeriesInput } from "../inputs/TopicCreateNestedOneWithoutSeasonSeriesInput";
export declare class SeasonSeriesCreateWithoutReactionsInput {
    id?: string | undefined;
    seasonOrSeriesNumber: number;
    title: string;
    year: string;
    poster: string;
    overview: string;
    trailer: string;
    coverImage: string;
    tagline: string;
    Topic: TopicCreateNestedOneWithoutSeasonSeriesInput;
    Episodes?: EpisodeCreateNestedManyWithoutSeasonSeriesInput | undefined;
    Posts?: PostCreateNestedManyWithoutSeasonSeriesInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}