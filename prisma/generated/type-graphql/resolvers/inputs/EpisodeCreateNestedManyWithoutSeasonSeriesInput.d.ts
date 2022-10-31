import { EpisodeCreateManySeasonSeriesInputEnvelope } from "../inputs/EpisodeCreateManySeasonSeriesInputEnvelope";
import { EpisodeCreateOrConnectWithoutSeasonSeriesInput } from "../inputs/EpisodeCreateOrConnectWithoutSeasonSeriesInput";
import { EpisodeCreateWithoutSeasonSeriesInput } from "../inputs/EpisodeCreateWithoutSeasonSeriesInput";
import { EpisodeWhereUniqueInput } from "../inputs/EpisodeWhereUniqueInput";
export declare class EpisodeCreateNestedManyWithoutSeasonSeriesInput {
    create?: EpisodeCreateWithoutSeasonSeriesInput[] | undefined;
    connectOrCreate?: EpisodeCreateOrConnectWithoutSeasonSeriesInput[] | undefined;
    createMany?: EpisodeCreateManySeasonSeriesInputEnvelope | undefined;
    connect?: EpisodeWhereUniqueInput[] | undefined;
}
