import { SeasonSeriesCreateManyTopicInputEnvelope } from "../inputs/SeasonSeriesCreateManyTopicInputEnvelope";
import { SeasonSeriesCreateOrConnectWithoutTopicInput } from "../inputs/SeasonSeriesCreateOrConnectWithoutTopicInput";
import { SeasonSeriesCreateWithoutTopicInput } from "../inputs/SeasonSeriesCreateWithoutTopicInput";
import { SeasonSeriesScalarWhereInput } from "../inputs/SeasonSeriesScalarWhereInput";
import { SeasonSeriesUpdateManyWithWhereWithoutTopicInput } from "../inputs/SeasonSeriesUpdateManyWithWhereWithoutTopicInput";
import { SeasonSeriesUpdateWithWhereUniqueWithoutTopicInput } from "../inputs/SeasonSeriesUpdateWithWhereUniqueWithoutTopicInput";
import { SeasonSeriesUpsertWithWhereUniqueWithoutTopicInput } from "../inputs/SeasonSeriesUpsertWithWhereUniqueWithoutTopicInput";
import { SeasonSeriesWhereUniqueInput } from "../inputs/SeasonSeriesWhereUniqueInput";
export declare class SeasonSeriesUpdateManyWithoutTopicInput {
    create?: SeasonSeriesCreateWithoutTopicInput[] | undefined;
    connectOrCreate?: SeasonSeriesCreateOrConnectWithoutTopicInput[] | undefined;
    upsert?: SeasonSeriesUpsertWithWhereUniqueWithoutTopicInput[] | undefined;
    createMany?: SeasonSeriesCreateManyTopicInputEnvelope | undefined;
    set?: SeasonSeriesWhereUniqueInput[] | undefined;
    disconnect?: SeasonSeriesWhereUniqueInput[] | undefined;
    delete?: SeasonSeriesWhereUniqueInput[] | undefined;
    connect?: SeasonSeriesWhereUniqueInput[] | undefined;
    update?: SeasonSeriesUpdateWithWhereUniqueWithoutTopicInput[] | undefined;
    updateMany?: SeasonSeriesUpdateManyWithWhereWithoutTopicInput[] | undefined;
    deleteMany?: SeasonSeriesScalarWhereInput[] | undefined;
}
