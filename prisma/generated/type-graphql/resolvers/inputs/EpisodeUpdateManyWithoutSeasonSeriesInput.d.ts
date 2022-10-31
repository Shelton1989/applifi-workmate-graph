import { EpisodeCreateManySeasonSeriesInputEnvelope } from "../inputs/EpisodeCreateManySeasonSeriesInputEnvelope";
import { EpisodeCreateOrConnectWithoutSeasonSeriesInput } from "../inputs/EpisodeCreateOrConnectWithoutSeasonSeriesInput";
import { EpisodeCreateWithoutSeasonSeriesInput } from "../inputs/EpisodeCreateWithoutSeasonSeriesInput";
import { EpisodeScalarWhereInput } from "../inputs/EpisodeScalarWhereInput";
import { EpisodeUpdateManyWithWhereWithoutSeasonSeriesInput } from "../inputs/EpisodeUpdateManyWithWhereWithoutSeasonSeriesInput";
import { EpisodeUpdateWithWhereUniqueWithoutSeasonSeriesInput } from "../inputs/EpisodeUpdateWithWhereUniqueWithoutSeasonSeriesInput";
import { EpisodeUpsertWithWhereUniqueWithoutSeasonSeriesInput } from "../inputs/EpisodeUpsertWithWhereUniqueWithoutSeasonSeriesInput";
import { EpisodeWhereUniqueInput } from "../inputs/EpisodeWhereUniqueInput";
export declare class EpisodeUpdateManyWithoutSeasonSeriesInput {
    create?: EpisodeCreateWithoutSeasonSeriesInput[] | undefined;
    connectOrCreate?: EpisodeCreateOrConnectWithoutSeasonSeriesInput[] | undefined;
    upsert?: EpisodeUpsertWithWhereUniqueWithoutSeasonSeriesInput[] | undefined;
    createMany?: EpisodeCreateManySeasonSeriesInputEnvelope | undefined;
    set?: EpisodeWhereUniqueInput[] | undefined;
    disconnect?: EpisodeWhereUniqueInput[] | undefined;
    delete?: EpisodeWhereUniqueInput[] | undefined;
    connect?: EpisodeWhereUniqueInput[] | undefined;
    update?: EpisodeUpdateWithWhereUniqueWithoutSeasonSeriesInput[] | undefined;
    updateMany?: EpisodeUpdateManyWithWhereWithoutSeasonSeriesInput[] | undefined;
    deleteMany?: EpisodeScalarWhereInput[] | undefined;
}
