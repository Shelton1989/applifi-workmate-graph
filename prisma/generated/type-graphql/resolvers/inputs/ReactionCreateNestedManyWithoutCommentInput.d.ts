import { ReactionCreateManyCommentInputEnvelope } from "../inputs/ReactionCreateManyCommentInputEnvelope";
import { ReactionCreateOrConnectWithoutCommentInput } from "../inputs/ReactionCreateOrConnectWithoutCommentInput";
import { ReactionCreateWithoutCommentInput } from "../inputs/ReactionCreateWithoutCommentInput";
import { ReactionWhereUniqueInput } from "../inputs/ReactionWhereUniqueInput";
export declare class ReactionCreateNestedManyWithoutCommentInput {
    create?: ReactionCreateWithoutCommentInput[] | undefined;
    connectOrCreate?: ReactionCreateOrConnectWithoutCommentInput[] | undefined;
    createMany?: ReactionCreateManyCommentInputEnvelope | undefined;
    connect?: ReactionWhereUniqueInput[] | undefined;
}
