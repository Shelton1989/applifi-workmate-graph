import { ReactionCreateManyEpisodeInputEnvelope } from "../inputs/ReactionCreateManyEpisodeInputEnvelope";
import { ReactionCreateOrConnectWithoutEpisodeInput } from "../inputs/ReactionCreateOrConnectWithoutEpisodeInput";
import { ReactionCreateWithoutEpisodeInput } from "../inputs/ReactionCreateWithoutEpisodeInput";
import { ReactionScalarWhereInput } from "../inputs/ReactionScalarWhereInput";
import { ReactionUpdateManyWithWhereWithoutEpisodeInput } from "../inputs/ReactionUpdateManyWithWhereWithoutEpisodeInput";
import { ReactionUpdateWithWhereUniqueWithoutEpisodeInput } from "../inputs/ReactionUpdateWithWhereUniqueWithoutEpisodeInput";
import { ReactionUpsertWithWhereUniqueWithoutEpisodeInput } from "../inputs/ReactionUpsertWithWhereUniqueWithoutEpisodeInput";
import { ReactionWhereUniqueInput } from "../inputs/ReactionWhereUniqueInput";
export declare class ReactionUpdateManyWithoutEpisodeInput {
    create?: ReactionCreateWithoutEpisodeInput[] | undefined;
    connectOrCreate?: ReactionCreateOrConnectWithoutEpisodeInput[] | undefined;
    upsert?: ReactionUpsertWithWhereUniqueWithoutEpisodeInput[] | undefined;
    createMany?: ReactionCreateManyEpisodeInputEnvelope | undefined;
    set?: ReactionWhereUniqueInput[] | undefined;
    disconnect?: ReactionWhereUniqueInput[] | undefined;
    delete?: ReactionWhereUniqueInput[] | undefined;
    connect?: ReactionWhereUniqueInput[] | undefined;
    update?: ReactionUpdateWithWhereUniqueWithoutEpisodeInput[] | undefined;
    updateMany?: ReactionUpdateManyWithWhereWithoutEpisodeInput[] | undefined;
    deleteMany?: ReactionScalarWhereInput[] | undefined;
}
