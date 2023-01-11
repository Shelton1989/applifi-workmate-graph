import { ExperienceCreateOrConnectWithoutAvailabilityInput } from "../inputs/ExperienceCreateOrConnectWithoutAvailabilityInput";
import { ExperienceCreateWithoutAvailabilityInput } from "../inputs/ExperienceCreateWithoutAvailabilityInput";
import { ExperienceWhereUniqueInput } from "../inputs/ExperienceWhereUniqueInput";
export declare class ExperienceCreateNestedOneWithoutAvailabilityInput {
    create?: ExperienceCreateWithoutAvailabilityInput | undefined;
    connectOrCreate?: ExperienceCreateOrConnectWithoutAvailabilityInput | undefined;
    connect?: ExperienceWhereUniqueInput | undefined;
}
