import { ReactionCreateManyReplyInputEnvelope } from "../inputs/ReactionCreateManyReplyInputEnvelope";
import { ReactionCreateOrConnectWithoutReplyInput } from "../inputs/ReactionCreateOrConnectWithoutReplyInput";
import { ReactionCreateWithoutReplyInput } from "../inputs/ReactionCreateWithoutReplyInput";
import { ReactionScalarWhereInput } from "../inputs/ReactionScalarWhereInput";
import { ReactionUpdateManyWithWhereWithoutReplyInput } from "../inputs/ReactionUpdateManyWithWhereWithoutReplyInput";
import { ReactionUpdateWithWhereUniqueWithoutReplyInput } from "../inputs/ReactionUpdateWithWhereUniqueWithoutReplyInput";
import { ReactionUpsertWithWhereUniqueWithoutReplyInput } from "../inputs/ReactionUpsertWithWhereUniqueWithoutReplyInput";
import { ReactionWhereUniqueInput } from "../inputs/ReactionWhereUniqueInput";
export declare class ReactionUpdateManyWithoutReplyInput {
    create?: ReactionCreateWithoutReplyInput[] | undefined;
    connectOrCreate?: ReactionCreateOrConnectWithoutReplyInput[] | undefined;
    upsert?: ReactionUpsertWithWhereUniqueWithoutReplyInput[] | undefined;
    createMany?: ReactionCreateManyReplyInputEnvelope | undefined;
    set?: ReactionWhereUniqueInput[] | undefined;
    disconnect?: ReactionWhereUniqueInput[] | undefined;
    delete?: ReactionWhereUniqueInput[] | undefined;
    connect?: ReactionWhereUniqueInput[] | undefined;
    update?: ReactionUpdateWithWhereUniqueWithoutReplyInput[] | undefined;
    updateMany?: ReactionUpdateManyWithWhereWithoutReplyInput[] | undefined;
    deleteMany?: ReactionScalarWhereInput[] | undefined;
}
