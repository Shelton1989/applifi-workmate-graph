import { AggregateRatingCreateOrConnectWithoutSeasonSeriesInput } from "../inputs/AggregateRatingCreateOrConnectWithoutSeasonSeriesInput";
import { AggregateRatingCreateWithoutSeasonSeriesInput } from "../inputs/AggregateRatingCreateWithoutSeasonSeriesInput";
import { AggregateRatingUpdateWithoutSeasonSeriesInput } from "../inputs/AggregateRatingUpdateWithoutSeasonSeriesInput";
import { AggregateRatingUpsertWithoutSeasonSeriesInput } from "../inputs/AggregateRatingUpsertWithoutSeasonSeriesInput";
import { AggregateRatingWhereUniqueInput } from "../inputs/AggregateRatingWhereUniqueInput";
export declare class AggregateRatingUpdateOneWithoutSeasonSeriesInput {
    create?: AggregateRatingCreateWithoutSeasonSeriesInput | undefined;
    connectOrCreate?: AggregateRatingCreateOrConnectWithoutSeasonSeriesInput | undefined;
    upsert?: AggregateRatingUpsertWithoutSeasonSeriesInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: AggregateRatingWhereUniqueInput | undefined;
    update?: AggregateRatingUpdateWithoutSeasonSeriesInput | undefined;
}
