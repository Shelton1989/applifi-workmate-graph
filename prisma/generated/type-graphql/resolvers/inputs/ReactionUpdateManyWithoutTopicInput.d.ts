import { ReactionCreateManyTopicInputEnvelope } from "../inputs/ReactionCreateManyTopicInputEnvelope";
import { ReactionCreateOrConnectWithoutTopicInput } from "../inputs/ReactionCreateOrConnectWithoutTopicInput";
import { ReactionCreateWithoutTopicInput } from "../inputs/ReactionCreateWithoutTopicInput";
import { ReactionScalarWhereInput } from "../inputs/ReactionScalarWhereInput";
import { ReactionUpdateManyWithWhereWithoutTopicInput } from "../inputs/ReactionUpdateManyWithWhereWithoutTopicInput";
import { ReactionUpdateWithWhereUniqueWithoutTopicInput } from "../inputs/ReactionUpdateWithWhereUniqueWithoutTopicInput";
import { ReactionUpsertWithWhereUniqueWithoutTopicInput } from "../inputs/ReactionUpsertWithWhereUniqueWithoutTopicInput";
import { ReactionWhereUniqueInput } from "../inputs/ReactionWhereUniqueInput";
export declare class ReactionUpdateManyWithoutTopicInput {
    create?: ReactionCreateWithoutTopicInput[] | undefined;
    connectOrCreate?: ReactionCreateOrConnectWithoutTopicInput[] | undefined;
    upsert?: ReactionUpsertWithWhereUniqueWithoutTopicInput[] | undefined;
    createMany?: ReactionCreateManyTopicInputEnvelope | undefined;
    set?: ReactionWhereUniqueInput[] | undefined;
    disconnect?: ReactionWhereUniqueInput[] | undefined;
    delete?: ReactionWhereUniqueInput[] | undefined;
    connect?: ReactionWhereUniqueInput[] | undefined;
    update?: ReactionUpdateWithWhereUniqueWithoutTopicInput[] | undefined;
    updateMany?: ReactionUpdateManyWithWhereWithoutTopicInput[] | undefined;
    deleteMany?: ReactionScalarWhereInput[] | undefined;
}
