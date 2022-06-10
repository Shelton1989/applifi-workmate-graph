import { ReactionCreateManyAuthorInputEnvelope } from "../inputs/ReactionCreateManyAuthorInputEnvelope";
import { ReactionCreateOrConnectWithoutAuthorInput } from "../inputs/ReactionCreateOrConnectWithoutAuthorInput";
import { ReactionCreateWithoutAuthorInput } from "../inputs/ReactionCreateWithoutAuthorInput";
import { ReactionWhereUniqueInput } from "../inputs/ReactionWhereUniqueInput";
export declare class ReactionCreateNestedManyWithoutAuthorInput {
    create?: ReactionCreateWithoutAuthorInput[] | undefined;
    connectOrCreate?: ReactionCreateOrConnectWithoutAuthorInput[] | undefined;
    createMany?: ReactionCreateManyAuthorInputEnvelope | undefined;
    connect?: ReactionWhereUniqueInput[] | undefined;
}
