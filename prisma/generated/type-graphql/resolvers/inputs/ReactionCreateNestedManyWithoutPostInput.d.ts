import { ReactionCreateManyPostInputEnvelope } from "../inputs/ReactionCreateManyPostInputEnvelope";
import { ReactionCreateOrConnectWithoutPostInput } from "../inputs/ReactionCreateOrConnectWithoutPostInput";
import { ReactionCreateWithoutPostInput } from "../inputs/ReactionCreateWithoutPostInput";
import { ReactionWhereUniqueInput } from "../inputs/ReactionWhereUniqueInput";
export declare class ReactionCreateNestedManyWithoutPostInput {
    create?: ReactionCreateWithoutPostInput[] | undefined;
    connectOrCreate?: ReactionCreateOrConnectWithoutPostInput[] | undefined;
    createMany?: ReactionCreateManyPostInputEnvelope | undefined;
    connect?: ReactionWhereUniqueInput[] | undefined;
}
