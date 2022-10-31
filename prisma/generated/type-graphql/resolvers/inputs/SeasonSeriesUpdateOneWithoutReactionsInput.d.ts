import { SeasonSeriesCreateOrConnectWithoutReactionsInput } from "../inputs/SeasonSeriesCreateOrConnectWithoutReactionsInput";
import { SeasonSeriesCreateWithoutReactionsInput } from "../inputs/SeasonSeriesCreateWithoutReactionsInput";
import { SeasonSeriesUpdateWithoutReactionsInput } from "../inputs/SeasonSeriesUpdateWithoutReactionsInput";
import { SeasonSeriesUpsertWithoutReactionsInput } from "../inputs/SeasonSeriesUpsertWithoutReactionsInput";
import { SeasonSeriesWhereUniqueInput } from "../inputs/SeasonSeriesWhereUniqueInput";
export declare class SeasonSeriesUpdateOneWithoutReactionsInput {
    create?: SeasonSeriesCreateWithoutReactionsInput | undefined;
    connectOrCreate?: SeasonSeriesCreateOrConnectWithoutReactionsInput | undefined;
    upsert?: SeasonSeriesUpsertWithoutReactionsInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: SeasonSeriesWhereUniqueInput | undefined;
    update?: SeasonSeriesUpdateWithoutReactionsInput | undefined;
}
