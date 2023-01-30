import { FeaturesCreateManyExperienceInputEnvelope } from "../inputs/FeaturesCreateManyExperienceInputEnvelope";
import { FeaturesCreateOrConnectWithoutExperienceInput } from "../inputs/FeaturesCreateOrConnectWithoutExperienceInput";
import { FeaturesCreateWithoutExperienceInput } from "../inputs/FeaturesCreateWithoutExperienceInput";
import { FeaturesWhereUniqueInput } from "../inputs/FeaturesWhereUniqueInput";
export declare class FeaturesCreateNestedManyWithoutExperienceInput {
    create?: FeaturesCreateWithoutExperienceInput[] | undefined;
    connectOrCreate?: FeaturesCreateOrConnectWithoutExperienceInput[] | undefined;
    createMany?: FeaturesCreateManyExperienceInputEnvelope | undefined;
    connect?: FeaturesWhereUniqueInput[] | undefined;
}
