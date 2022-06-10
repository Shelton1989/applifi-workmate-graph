import { ReactionCreateManyReplyInputEnvelope } from "../inputs/ReactionCreateManyReplyInputEnvelope";
import { ReactionCreateOrConnectWithoutReplyInput } from "../inputs/ReactionCreateOrConnectWithoutReplyInput";
import { ReactionCreateWithoutReplyInput } from "../inputs/ReactionCreateWithoutReplyInput";
import { ReactionWhereUniqueInput } from "../inputs/ReactionWhereUniqueInput";
export declare class ReactionCreateNestedManyWithoutReplyInput {
    create?: ReactionCreateWithoutReplyInput[] | undefined;
    connectOrCreate?: ReactionCreateOrConnectWithoutReplyInput[] | undefined;
    createMany?: ReactionCreateManyReplyInputEnvelope | undefined;
    connect?: ReactionWhereUniqueInput[] | undefined;
}
