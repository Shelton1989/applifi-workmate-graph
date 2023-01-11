import { ExperienceAvailabilityCreateManyExperienceInputEnvelope } from "../inputs/ExperienceAvailabilityCreateManyExperienceInputEnvelope";
import { ExperienceAvailabilityCreateOrConnectWithoutExperienceInput } from "../inputs/ExperienceAvailabilityCreateOrConnectWithoutExperienceInput";
import { ExperienceAvailabilityCreateWithoutExperienceInput } from "../inputs/ExperienceAvailabilityCreateWithoutExperienceInput";
import { ExperienceAvailabilityWhereUniqueInput } from "../inputs/ExperienceAvailabilityWhereUniqueInput";
export declare class ExperienceAvailabilityCreateNestedManyWithoutExperienceInput {
    create?: ExperienceAvailabilityCreateWithoutExperienceInput[] | undefined;
    connectOrCreate?: ExperienceAvailabilityCreateOrConnectWithoutExperienceInput[] | undefined;
    createMany?: ExperienceAvailabilityCreateManyExperienceInputEnvelope | undefined;
    connect?: ExperienceAvailabilityWhereUniqueInput[] | undefined;
}
