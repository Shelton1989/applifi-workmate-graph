import { ReactionCreateManySeasonSeriesInputEnvelope } from "../inputs/ReactionCreateManySeasonSeriesInputEnvelope";
import { ReactionCreateOrConnectWithoutSeasonSeriesInput } from "../inputs/ReactionCreateOrConnectWithoutSeasonSeriesInput";
import { ReactionCreateWithoutSeasonSeriesInput } from "../inputs/ReactionCreateWithoutSeasonSeriesInput";
import { ReactionScalarWhereInput } from "../inputs/ReactionScalarWhereInput";
import { ReactionUpdateManyWithWhereWithoutSeasonSeriesInput } from "../inputs/ReactionUpdateManyWithWhereWithoutSeasonSeriesInput";
import { ReactionUpdateWithWhereUniqueWithoutSeasonSeriesInput } from "../inputs/ReactionUpdateWithWhereUniqueWithoutSeasonSeriesInput";
import { ReactionUpsertWithWhereUniqueWithoutSeasonSeriesInput } from "../inputs/ReactionUpsertWithWhereUniqueWithoutSeasonSeriesInput";
import { ReactionWhereUniqueInput } from "../inputs/ReactionWhereUniqueInput";
export declare class ReactionUpdateManyWithoutSeasonSeriesInput {
    create?: ReactionCreateWithoutSeasonSeriesInput[] | undefined;
    connectOrCreate?: ReactionCreateOrConnectWithoutSeasonSeriesInput[] | undefined;
    upsert?: ReactionUpsertWithWhereUniqueWithoutSeasonSeriesInput[] | undefined;
    createMany?: ReactionCreateManySeasonSeriesInputEnvelope | undefined;
    set?: ReactionWhereUniqueInput[] | undefined;
    disconnect?: ReactionWhereUniqueInput[] | undefined;
    delete?: ReactionWhereUniqueInput[] | undefined;
    connect?: ReactionWhereUniqueInput[] | undefined;
    update?: ReactionUpdateWithWhereUniqueWithoutSeasonSeriesInput[] | undefined;
    updateMany?: ReactionUpdateManyWithWhereWithoutSeasonSeriesInput[] | undefined;
    deleteMany?: ReactionScalarWhereInput[] | undefined;
}
