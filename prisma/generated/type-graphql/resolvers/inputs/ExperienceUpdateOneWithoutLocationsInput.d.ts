import { ExperienceCreateOrConnectWithoutLocationsInput } from "../inputs/ExperienceCreateOrConnectWithoutLocationsInput";
import { ExperienceCreateWithoutLocationsInput } from "../inputs/ExperienceCreateWithoutLocationsInput";
import { ExperienceUpdateWithoutLocationsInput } from "../inputs/ExperienceUpdateWithoutLocationsInput";
import { ExperienceUpsertWithoutLocationsInput } from "../inputs/ExperienceUpsertWithoutLocationsInput";
import { ExperienceWhereUniqueInput } from "../inputs/ExperienceWhereUniqueInput";
export declare class ExperienceUpdateOneWithoutLocationsInput {
    create?: ExperienceCreateWithoutLocationsInput | undefined;
    connectOrCreate?: ExperienceCreateOrConnectWithoutLocationsInput | undefined;
    upsert?: ExperienceUpsertWithoutLocationsInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: ExperienceWhereUniqueInput | undefined;
    update?: ExperienceUpdateWithoutLocationsInput | undefined;
}
