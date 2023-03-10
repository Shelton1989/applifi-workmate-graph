import { ReactionCreateManyMealInputEnvelope } from "../inputs/ReactionCreateManyMealInputEnvelope";
import { ReactionCreateOrConnectWithoutMealInput } from "../inputs/ReactionCreateOrConnectWithoutMealInput";
import { ReactionCreateWithoutMealInput } from "../inputs/ReactionCreateWithoutMealInput";
import { ReactionScalarWhereInput } from "../inputs/ReactionScalarWhereInput";
import { ReactionUpdateManyWithWhereWithoutMealInput } from "../inputs/ReactionUpdateManyWithWhereWithoutMealInput";
import { ReactionUpdateWithWhereUniqueWithoutMealInput } from "../inputs/ReactionUpdateWithWhereUniqueWithoutMealInput";
import { ReactionUpsertWithWhereUniqueWithoutMealInput } from "../inputs/ReactionUpsertWithWhereUniqueWithoutMealInput";
import { ReactionWhereUniqueInput } from "../inputs/ReactionWhereUniqueInput";
export declare class ReactionUpdateManyWithoutMealInput {
    create?: ReactionCreateWithoutMealInput[] | undefined;
    connectOrCreate?: ReactionCreateOrConnectWithoutMealInput[] | undefined;
    upsert?: ReactionUpsertWithWhereUniqueWithoutMealInput[] | undefined;
    createMany?: ReactionCreateManyMealInputEnvelope | undefined;
    set?: ReactionWhereUniqueInput[] | undefined;
    disconnect?: ReactionWhereUniqueInput[] | undefined;
    delete?: ReactionWhereUniqueInput[] | undefined;
    connect?: ReactionWhereUniqueInput[] | undefined;
    update?: ReactionUpdateWithWhereUniqueWithoutMealInput[] | undefined;
    updateMany?: ReactionUpdateManyWithWhereWithoutMealInput[] | undefined;
    deleteMany?: ReactionScalarWhereInput[] | undefined;
}
