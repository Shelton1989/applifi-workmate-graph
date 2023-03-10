import { ReactionCreateManyMealInputEnvelope } from "../inputs/ReactionCreateManyMealInputEnvelope";
import { ReactionCreateOrConnectWithoutMealInput } from "../inputs/ReactionCreateOrConnectWithoutMealInput";
import { ReactionCreateWithoutMealInput } from "../inputs/ReactionCreateWithoutMealInput";
import { ReactionWhereUniqueInput } from "../inputs/ReactionWhereUniqueInput";
export declare class ReactionCreateNestedManyWithoutMealInput {
    create?: ReactionCreateWithoutMealInput[] | undefined;
    connectOrCreate?: ReactionCreateOrConnectWithoutMealInput[] | undefined;
    createMany?: ReactionCreateManyMealInputEnvelope | undefined;
    connect?: ReactionWhereUniqueInput[] | undefined;
}
