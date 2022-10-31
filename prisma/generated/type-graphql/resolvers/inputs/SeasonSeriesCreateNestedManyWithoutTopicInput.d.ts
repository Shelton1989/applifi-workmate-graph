import { SeasonSeriesCreateManyTopicInputEnvelope } from "../inputs/SeasonSeriesCreateManyTopicInputEnvelope";
import { SeasonSeriesCreateOrConnectWithoutTopicInput } from "../inputs/SeasonSeriesCreateOrConnectWithoutTopicInput";
import { SeasonSeriesCreateWithoutTopicInput } from "../inputs/SeasonSeriesCreateWithoutTopicInput";
import { SeasonSeriesWhereUniqueInput } from "../inputs/SeasonSeriesWhereUniqueInput";
export declare class SeasonSeriesCreateNestedManyWithoutTopicInput {
    create?: SeasonSeriesCreateWithoutTopicInput[] | undefined;
    connectOrCreate?: SeasonSeriesCreateOrConnectWithoutTopicInput[] | undefined;
    createMany?: SeasonSeriesCreateManyTopicInputEnvelope | undefined;
    connect?: SeasonSeriesWhereUniqueInput[] | undefined;
}
