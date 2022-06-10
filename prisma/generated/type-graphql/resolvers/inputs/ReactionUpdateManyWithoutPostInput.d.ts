import { ReactionCreateManyPostInputEnvelope } from "../inputs/ReactionCreateManyPostInputEnvelope";
import { ReactionCreateOrConnectWithoutPostInput } from "../inputs/ReactionCreateOrConnectWithoutPostInput";
import { ReactionCreateWithoutPostInput } from "../inputs/ReactionCreateWithoutPostInput";
import { ReactionScalarWhereInput } from "../inputs/ReactionScalarWhereInput";
import { ReactionUpdateManyWithWhereWithoutPostInput } from "../inputs/ReactionUpdateManyWithWhereWithoutPostInput";
import { ReactionUpdateWithWhereUniqueWithoutPostInput } from "../inputs/ReactionUpdateWithWhereUniqueWithoutPostInput";
import { ReactionUpsertWithWhereUniqueWithoutPostInput } from "../inputs/ReactionUpsertWithWhereUniqueWithoutPostInput";
import { ReactionWhereUniqueInput } from "../inputs/ReactionWhereUniqueInput";
export declare class ReactionUpdateManyWithoutPostInput {
    create?: ReactionCreateWithoutPostInput[] | undefined;
    connectOrCreate?: ReactionCreateOrConnectWithoutPostInput[] | undefined;
    upsert?: ReactionUpsertWithWhereUniqueWithoutPostInput[] | undefined;
    createMany?: ReactionCreateManyPostInputEnvelope | undefined;
    set?: ReactionWhereUniqueInput[] | undefined;
    disconnect?: ReactionWhereUniqueInput[] | undefined;
    delete?: ReactionWhereUniqueInput[] | undefined;
    connect?: ReactionWhereUniqueInput[] | undefined;
    update?: ReactionUpdateWithWhereUniqueWithoutPostInput[] | undefined;
    updateMany?: ReactionUpdateManyWithWhereWithoutPostInput[] | undefined;
    deleteMany?: ReactionScalarWhereInput[] | undefined;
}
