import { ReactionCreateManyCommentInputEnvelope } from "../inputs/ReactionCreateManyCommentInputEnvelope";
import { ReactionCreateOrConnectWithoutCommentInput } from "../inputs/ReactionCreateOrConnectWithoutCommentInput";
import { ReactionCreateWithoutCommentInput } from "../inputs/ReactionCreateWithoutCommentInput";
import { ReactionScalarWhereInput } from "../inputs/ReactionScalarWhereInput";
import { ReactionUpdateManyWithWhereWithoutCommentInput } from "../inputs/ReactionUpdateManyWithWhereWithoutCommentInput";
import { ReactionUpdateWithWhereUniqueWithoutCommentInput } from "../inputs/ReactionUpdateWithWhereUniqueWithoutCommentInput";
import { ReactionUpsertWithWhereUniqueWithoutCommentInput } from "../inputs/ReactionUpsertWithWhereUniqueWithoutCommentInput";
import { ReactionWhereUniqueInput } from "../inputs/ReactionWhereUniqueInput";
export declare class ReactionUpdateManyWithoutCommentInput {
    create?: ReactionCreateWithoutCommentInput[] | undefined;
    connectOrCreate?: ReactionCreateOrConnectWithoutCommentInput[] | undefined;
    upsert?: ReactionUpsertWithWhereUniqueWithoutCommentInput[] | undefined;
    createMany?: ReactionCreateManyCommentInputEnvelope | undefined;
    set?: ReactionWhereUniqueInput[] | undefined;
    disconnect?: ReactionWhereUniqueInput[] | undefined;
    delete?: ReactionWhereUniqueInput[] | undefined;
    connect?: ReactionWhereUniqueInput[] | undefined;
    update?: ReactionUpdateWithWhereUniqueWithoutCommentInput[] | undefined;
    updateMany?: ReactionUpdateManyWithWhereWithoutCommentInput[] | undefined;
    deleteMany?: ReactionScalarWhereInput[] | undefined;
}
