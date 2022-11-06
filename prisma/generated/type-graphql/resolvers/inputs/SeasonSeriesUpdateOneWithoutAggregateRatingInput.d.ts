import { SeasonSeriesCreateOrConnectWithoutAggregateRatingInput } from "../inputs/SeasonSeriesCreateOrConnectWithoutAggregateRatingInput";
import { SeasonSeriesCreateWithoutAggregateRatingInput } from "../inputs/SeasonSeriesCreateWithoutAggregateRatingInput";
import { SeasonSeriesUpdateWithoutAggregateRatingInput } from "../inputs/SeasonSeriesUpdateWithoutAggregateRatingInput";
import { SeasonSeriesUpsertWithoutAggregateRatingInput } from "../inputs/SeasonSeriesUpsertWithoutAggregateRatingInput";
import { SeasonSeriesWhereUniqueInput } from "../inputs/SeasonSeriesWhereUniqueInput";
export declare class SeasonSeriesUpdateOneWithoutAggregateRatingInput {
    create?: SeasonSeriesCreateWithoutAggregateRatingInput | undefined;
    connectOrCreate?: SeasonSeriesCreateOrConnectWithoutAggregateRatingInput | undefined;
    upsert?: SeasonSeriesUpsertWithoutAggregateRatingInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: SeasonSeriesWhereUniqueInput | undefined;
    update?: SeasonSeriesUpdateWithoutAggregateRatingInput | undefined;
}
