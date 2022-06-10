import { ReplyCreateManyCommentInputEnvelope } from "../inputs/ReplyCreateManyCommentInputEnvelope";
import { ReplyCreateOrConnectWithoutCommentInput } from "../inputs/ReplyCreateOrConnectWithoutCommentInput";
import { ReplyCreateWithoutCommentInput } from "../inputs/ReplyCreateWithoutCommentInput";
import { ReplyWhereUniqueInput } from "../inputs/ReplyWhereUniqueInput";
export declare class ReplyCreateNestedManyWithoutCommentInput {
    create?: ReplyCreateWithoutCommentInput[] | undefined;
    connectOrCreate?: ReplyCreateOrConnectWithoutCommentInput[] | undefined;
    createMany?: ReplyCreateManyCommentInputEnvelope | undefined;
    connect?: ReplyWhereUniqueInput[] | undefined;
}
