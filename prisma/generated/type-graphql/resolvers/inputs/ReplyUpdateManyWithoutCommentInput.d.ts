import { ReplyCreateManyCommentInputEnvelope } from "../inputs/ReplyCreateManyCommentInputEnvelope";
import { ReplyCreateOrConnectWithoutCommentInput } from "../inputs/ReplyCreateOrConnectWithoutCommentInput";
import { ReplyCreateWithoutCommentInput } from "../inputs/ReplyCreateWithoutCommentInput";
import { ReplyScalarWhereInput } from "../inputs/ReplyScalarWhereInput";
import { ReplyUpdateManyWithWhereWithoutCommentInput } from "../inputs/ReplyUpdateManyWithWhereWithoutCommentInput";
import { ReplyUpdateWithWhereUniqueWithoutCommentInput } from "../inputs/ReplyUpdateWithWhereUniqueWithoutCommentInput";
import { ReplyUpsertWithWhereUniqueWithoutCommentInput } from "../inputs/ReplyUpsertWithWhereUniqueWithoutCommentInput";
import { ReplyWhereUniqueInput } from "../inputs/ReplyWhereUniqueInput";
export declare class ReplyUpdateManyWithoutCommentInput {
    create?: ReplyCreateWithoutCommentInput[] | undefined;
    connectOrCreate?: ReplyCreateOrConnectWithoutCommentInput[] | undefined;
    upsert?: ReplyUpsertWithWhereUniqueWithoutCommentInput[] | undefined;
    createMany?: ReplyCreateManyCommentInputEnvelope | undefined;
    set?: ReplyWhereUniqueInput[] | undefined;
    disconnect?: ReplyWhereUniqueInput[] | undefined;
    delete?: ReplyWhereUniqueInput[] | undefined;
    connect?: ReplyWhereUniqueInput[] | undefined;
    update?: ReplyUpdateWithWhereUniqueWithoutCommentInput[] | undefined;
    updateMany?: ReplyUpdateManyWithWhereWithoutCommentInput[] | undefined;
    deleteMany?: ReplyScalarWhereInput[] | undefined;
}
