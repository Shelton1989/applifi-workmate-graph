import { TopicCreateOrConnectWithoutSeasonSeriesInput } from "../inputs/TopicCreateOrConnectWithoutSeasonSeriesInput";
import { TopicCreateWithoutSeasonSeriesInput } from "../inputs/TopicCreateWithoutSeasonSeriesInput";
import { TopicWhereUniqueInput } from "../inputs/TopicWhereUniqueInput";
export declare class TopicCreateNestedOneWithoutSeasonSeriesInput {
    create?: TopicCreateWithoutSeasonSeriesInput | undefined;
    connectOrCreate?: TopicCreateOrConnectWithoutSeasonSeriesInput | undefined;
    connect?: TopicWhereUniqueInput | undefined;
}
