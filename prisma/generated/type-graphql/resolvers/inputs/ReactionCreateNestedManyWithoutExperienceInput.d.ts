import { ReactionCreateManyExperienceInputEnvelope } from "../inputs/ReactionCreateManyExperienceInputEnvelope";
import { ReactionCreateOrConnectWithoutExperienceInput } from "../inputs/ReactionCreateOrConnectWithoutExperienceInput";
import { ReactionCreateWithoutExperienceInput } from "../inputs/ReactionCreateWithoutExperienceInput";
import { ReactionWhereUniqueInput } from "../inputs/ReactionWhereUniqueInput";
export declare class ReactionCreateNestedManyWithoutExperienceInput {
    create?: ReactionCreateWithoutExperienceInput[] | undefined;
    connectOrCreate?: ReactionCreateOrConnectWithoutExperienceInput[] | undefined;
    createMany?: ReactionCreateManyExperienceInputEnvelope | undefined;
    connect?: ReactionWhereUniqueInput[] | undefined;
}
