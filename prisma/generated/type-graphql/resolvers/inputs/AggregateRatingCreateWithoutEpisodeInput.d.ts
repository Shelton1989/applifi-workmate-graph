import { SeasonSeriesCreateNestedOneWithoutAggregateRatingInput } from "../inputs/SeasonSeriesCreateNestedOneWithoutAggregateRatingInput";
import { TopicCreateNestedOneWithoutAggregateRatingInput } from "../inputs/TopicCreateNestedOneWithoutAggregateRatingInput";
export declare class AggregateRatingCreateWithoutEpisodeInput {
    id?: string | undefined;
    ratingValue: number;
    countedPosts?: number | undefined;
    allPosts?: number | undefined;
    ratingCount?: number | undefined;
    Topic?: TopicCreateNestedOneWithoutAggregateRatingInput | undefined;
    SeasonSeries?: SeasonSeriesCreateNestedOneWithoutAggregateRatingInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
