import { ReactionCreateManyAuthorInputEnvelope } from "../inputs/ReactionCreateManyAuthorInputEnvelope";
import { ReactionCreateOrConnectWithoutAuthorInput } from "../inputs/ReactionCreateOrConnectWithoutAuthorInput";
import { ReactionCreateWithoutAuthorInput } from "../inputs/ReactionCreateWithoutAuthorInput";
import { ReactionScalarWhereInput } from "../inputs/ReactionScalarWhereInput";
import { ReactionUpdateManyWithWhereWithoutAuthorInput } from "../inputs/ReactionUpdateManyWithWhereWithoutAuthorInput";
import { ReactionUpdateWithWhereUniqueWithoutAuthorInput } from "../inputs/ReactionUpdateWithWhereUniqueWithoutAuthorInput";
import { ReactionUpsertWithWhereUniqueWithoutAuthorInput } from "../inputs/ReactionUpsertWithWhereUniqueWithoutAuthorInput";
import { ReactionWhereUniqueInput } from "../inputs/ReactionWhereUniqueInput";
export declare class ReactionUpdateManyWithoutAuthorInput {
    create?: ReactionCreateWithoutAuthorInput[] | undefined;
    connectOrCreate?: ReactionCreateOrConnectWithoutAuthorInput[] | undefined;
    upsert?: ReactionUpsertWithWhereUniqueWithoutAuthorInput[] | undefined;
    createMany?: ReactionCreateManyAuthorInputEnvelope | undefined;
    set?: ReactionWhereUniqueInput[] | undefined;
    disconnect?: ReactionWhereUniqueInput[] | undefined;
    delete?: ReactionWhereUniqueInput[] | undefined;
    connect?: ReactionWhereUniqueInput[] | undefined;
    update?: ReactionUpdateWithWhereUniqueWithoutAuthorInput[] | undefined;
    updateMany?: ReactionUpdateManyWithWhereWithoutAuthorInput[] | undefined;
    deleteMany?: ReactionScalarWhereInput[] | undefined;
}
