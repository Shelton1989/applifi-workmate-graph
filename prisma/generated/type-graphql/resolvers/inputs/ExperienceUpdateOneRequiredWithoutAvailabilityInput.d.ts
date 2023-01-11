import { ExperienceCreateOrConnectWithoutAvailabilityInput } from "../inputs/ExperienceCreateOrConnectWithoutAvailabilityInput";
import { ExperienceCreateWithoutAvailabilityInput } from "../inputs/ExperienceCreateWithoutAvailabilityInput";
import { ExperienceUpdateWithoutAvailabilityInput } from "../inputs/ExperienceUpdateWithoutAvailabilityInput";
import { ExperienceUpsertWithoutAvailabilityInput } from "../inputs/ExperienceUpsertWithoutAvailabilityInput";
import { ExperienceWhereUniqueInput } from "../inputs/ExperienceWhereUniqueInput";
export declare class ExperienceUpdateOneRequiredWithoutAvailabilityInput {
    create?: ExperienceCreateWithoutAvailabilityInput | undefined;
    connectOrCreate?: ExperienceCreateOrConnectWithoutAvailabilityInput | undefined;
    upsert?: ExperienceUpsertWithoutAvailabilityInput | undefined;
    connect?: ExperienceWhereUniqueInput | undefined;
    update?: ExperienceUpdateWithoutAvailabilityInput | undefined;
}
