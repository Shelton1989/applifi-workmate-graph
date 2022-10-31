import { ReactionCreateManyTopicInputEnvelope } from "../inputs/ReactionCreateManyTopicInputEnvelope";
import { ReactionCreateOrConnectWithoutTopicInput } from "../inputs/ReactionCreateOrConnectWithoutTopicInput";
import { ReactionCreateWithoutTopicInput } from "../inputs/ReactionCreateWithoutTopicInput";
import { ReactionWhereUniqueInput } from "../inputs/ReactionWhereUniqueInput";
export declare class ReactionCreateNestedManyWithoutTopicInput {
    create?: ReactionCreateWithoutTopicInput[] | undefined;
    connectOrCreate?: ReactionCreateOrConnectWithoutTopicInput[] | undefined;
    createMany?: ReactionCreateManyTopicInputEnvelope | undefined;
    connect?: ReactionWhereUniqueInput[] | undefined;
}
