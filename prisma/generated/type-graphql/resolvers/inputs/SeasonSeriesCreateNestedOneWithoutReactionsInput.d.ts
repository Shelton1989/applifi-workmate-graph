import { SeasonSeriesCreateOrConnectWithoutReactionsInput } from "../inputs/SeasonSeriesCreateOrConnectWithoutReactionsInput";
import { SeasonSeriesCreateWithoutReactionsInput } from "../inputs/SeasonSeriesCreateWithoutReactionsInput";
import { SeasonSeriesWhereUniqueInput } from "../inputs/SeasonSeriesWhereUniqueInput";
export declare class SeasonSeriesCreateNestedOneWithoutReactionsInput {
    create?: SeasonSeriesCreateWithoutReactionsInput | undefined;
    connectOrCreate?: SeasonSeriesCreateOrConnectWithoutReactionsInput | undefined;
    connect?: SeasonSeriesWhereUniqueInput | undefined;
}
