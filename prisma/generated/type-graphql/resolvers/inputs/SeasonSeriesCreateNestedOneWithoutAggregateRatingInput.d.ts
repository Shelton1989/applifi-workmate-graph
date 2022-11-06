import { SeasonSeriesCreateOrConnectWithoutAggregateRatingInput } from "../inputs/SeasonSeriesCreateOrConnectWithoutAggregateRatingInput";
import { SeasonSeriesCreateWithoutAggregateRatingInput } from "../inputs/SeasonSeriesCreateWithoutAggregateRatingInput";
import { SeasonSeriesWhereUniqueInput } from "../inputs/SeasonSeriesWhereUniqueInput";
export declare class SeasonSeriesCreateNestedOneWithoutAggregateRatingInput {
    create?: SeasonSeriesCreateWithoutAggregateRatingInput | undefined;
    connectOrCreate?: SeasonSeriesCreateOrConnectWithoutAggregateRatingInput | undefined;
    connect?: SeasonSeriesWhereUniqueInput | undefined;
}
