import { TopicCreateOrConnectWithoutSeasonSeriesInput } from "../inputs/TopicCreateOrConnectWithoutSeasonSeriesInput";
import { TopicCreateWithoutSeasonSeriesInput } from "../inputs/TopicCreateWithoutSeasonSeriesInput";
import { TopicUpdateWithoutSeasonSeriesInput } from "../inputs/TopicUpdateWithoutSeasonSeriesInput";
import { TopicUpsertWithoutSeasonSeriesInput } from "../inputs/TopicUpsertWithoutSeasonSeriesInput";
import { TopicWhereUniqueInput } from "../inputs/TopicWhereUniqueInput";
export declare class TopicUpdateOneRequiredWithoutSeasonSeriesInput {
    create?: TopicCreateWithoutSeasonSeriesInput | undefined;
    connectOrCreate?: TopicCreateOrConnectWithoutSeasonSeriesInput | undefined;
    upsert?: TopicUpsertWithoutSeasonSeriesInput | undefined;
    connect?: TopicWhereUniqueInput | undefined;
    update?: TopicUpdateWithoutSeasonSeriesInput | undefined;
}
