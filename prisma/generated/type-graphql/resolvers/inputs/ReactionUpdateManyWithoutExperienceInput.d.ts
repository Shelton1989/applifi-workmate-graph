import { ReactionCreateManyExperienceInputEnvelope } from "../inputs/ReactionCreateManyExperienceInputEnvelope";
import { ReactionCreateOrConnectWithoutExperienceInput } from "../inputs/ReactionCreateOrConnectWithoutExperienceInput";
import { ReactionCreateWithoutExperienceInput } from "../inputs/ReactionCreateWithoutExperienceInput";
import { ReactionScalarWhereInput } from "../inputs/ReactionScalarWhereInput";
import { ReactionUpdateManyWithWhereWithoutExperienceInput } from "../inputs/ReactionUpdateManyWithWhereWithoutExperienceInput";
import { ReactionUpdateWithWhereUniqueWithoutExperienceInput } from "../inputs/ReactionUpdateWithWhereUniqueWithoutExperienceInput";
import { ReactionUpsertWithWhereUniqueWithoutExperienceInput } from "../inputs/ReactionUpsertWithWhereUniqueWithoutExperienceInput";
import { ReactionWhereUniqueInput } from "../inputs/ReactionWhereUniqueInput";
export declare class ReactionUpdateManyWithoutExperienceInput {
    create?: ReactionCreateWithoutExperienceInput[] | undefined;
    connectOrCreate?: ReactionCreateOrConnectWithoutExperienceInput[] | undefined;
    upsert?: ReactionUpsertWithWhereUniqueWithoutExperienceInput[] | undefined;
    createMany?: ReactionCreateManyExperienceInputEnvelope | undefined;
    set?: ReactionWhereUniqueInput[] | undefined;
    disconnect?: ReactionWhereUniqueInput[] | undefined;
    delete?: ReactionWhereUniqueInput[] | undefined;
    connect?: ReactionWhereUniqueInput[] | undefined;
    update?: ReactionUpdateWithWhereUniqueWithoutExperienceInput[] | undefined;
    updateMany?: ReactionUpdateManyWithWhereWithoutExperienceInput[] | undefined;
    deleteMany?: ReactionScalarWhereInput[] | undefined;
}
