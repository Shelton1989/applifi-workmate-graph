import { SeasonSeriesCreateOrConnectWithoutEpisodesInput } from "../inputs/SeasonSeriesCreateOrConnectWithoutEpisodesInput";
import { SeasonSeriesCreateWithoutEpisodesInput } from "../inputs/SeasonSeriesCreateWithoutEpisodesInput";
import { SeasonSeriesWhereUniqueInput } from "../inputs/SeasonSeriesWhereUniqueInput";
export declare class SeasonSeriesCreateNestedOneWithoutEpisodesInput {
    create?: SeasonSeriesCreateWithoutEpisodesInput | undefined;
    connectOrCreate?: SeasonSeriesCreateOrConnectWithoutEpisodesInput | undefined;
    connect?: SeasonSeriesWhereUniqueInput | undefined;
}
