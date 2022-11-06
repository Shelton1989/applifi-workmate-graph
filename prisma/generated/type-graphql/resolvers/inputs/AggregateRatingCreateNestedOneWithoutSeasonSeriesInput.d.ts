import { AggregateRatingCreateOrConnectWithoutSeasonSeriesInput } from "../inputs/AggregateRatingCreateOrConnectWithoutSeasonSeriesInput";
import { AggregateRatingCreateWithoutSeasonSeriesInput } from "../inputs/AggregateRatingCreateWithoutSeasonSeriesInput";
import { AggregateRatingWhereUniqueInput } from "../inputs/AggregateRatingWhereUniqueInput";
export declare class AggregateRatingCreateNestedOneWithoutSeasonSeriesInput {
    create?: AggregateRatingCreateWithoutSeasonSeriesInput | undefined;
    connectOrCreate?: AggregateRatingCreateOrConnectWithoutSeasonSeriesInput | undefined;
    connect?: AggregateRatingWhereUniqueInput | undefined;
}
