import { SeasonSeriesCreateOrConnectWithoutEpisodesInput } from "../inputs/SeasonSeriesCreateOrConnectWithoutEpisodesInput";
import { SeasonSeriesCreateWithoutEpisodesInput } from "../inputs/SeasonSeriesCreateWithoutEpisodesInput";
import { SeasonSeriesUpdateWithoutEpisodesInput } from "../inputs/SeasonSeriesUpdateWithoutEpisodesInput";
import { SeasonSeriesUpsertWithoutEpisodesInput } from "../inputs/SeasonSeriesUpsertWithoutEpisodesInput";
import { SeasonSeriesWhereUniqueInput } from "../inputs/SeasonSeriesWhereUniqueInput";
export declare class SeasonSeriesUpdateOneRequiredWithoutEpisodesInput {
    create?: SeasonSeriesCreateWithoutEpisodesInput | undefined;
    connectOrCreate?: SeasonSeriesCreateOrConnectWithoutEpisodesInput | undefined;
    upsert?: SeasonSeriesUpsertWithoutEpisodesInput | undefined;
    connect?: SeasonSeriesWhereUniqueInput | undefined;
    update?: SeasonSeriesUpdateWithoutEpisodesInput | undefined;
}
