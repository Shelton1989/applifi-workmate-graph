import { EpisodeCreateNestedManyWithoutSeasonSeriesInput } from "../inputs/EpisodeCreateNestedManyWithoutSeasonSeriesInput";
import { ReactionCreateNestedManyWithoutSeasonSeriesInput } from "../inputs/ReactionCreateNestedManyWithoutSeasonSeriesInput";
import { TopicCreateNestedOneWithoutSeasonSeriesInput } from "../inputs/TopicCreateNestedOneWithoutSeasonSeriesInput";
export declare class SeasonSeriesCreateWithoutPostsInput {
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
    Reactions?: ReactionCreateNestedManyWithoutSeasonSeriesInput | undefined;
    Episodes?: EpisodeCreateNestedManyWithoutSeasonSeriesInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
