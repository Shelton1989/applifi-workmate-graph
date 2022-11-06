import { EpisodeCreateNestedOneWithoutAggregateRatingInput } from "../inputs/EpisodeCreateNestedOneWithoutAggregateRatingInput";
import { SeasonSeriesCreateNestedOneWithoutAggregateRatingInput } from "../inputs/SeasonSeriesCreateNestedOneWithoutAggregateRatingInput";
export declare class AggregateRatingCreateWithoutTopicInput {
    id?: string | undefined;
    ratingValue: number;
    countedPosts?: number | undefined;
    allPosts?: number | undefined;
    ratingCount?: number | undefined;
    SeasonSeries?: SeasonSeriesCreateNestedOneWithoutAggregateRatingInput | undefined;
    Episode?: EpisodeCreateNestedOneWithoutAggregateRatingInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
