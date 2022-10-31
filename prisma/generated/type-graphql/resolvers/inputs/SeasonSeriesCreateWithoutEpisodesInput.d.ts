import { PostCreateNestedManyWithoutSeasonSeriesInput } from "../inputs/PostCreateNestedManyWithoutSeasonSeriesInput";
import { ReactionCreateNestedManyWithoutSeasonSeriesInput } from "../inputs/ReactionCreateNestedManyWithoutSeasonSeriesInput";
import { TopicCreateNestedOneWithoutSeasonSeriesInput } from "../inputs/TopicCreateNestedOneWithoutSeasonSeriesInput";
export declare class SeasonSeriesCreateWithoutEpisodesInput {
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
    Posts?: PostCreateNestedManyWithoutSeasonSeriesInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
