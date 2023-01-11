import { ExperienceCreateOrConnectWithoutLocationsInput } from "../inputs/ExperienceCreateOrConnectWithoutLocationsInput";
import { ExperienceCreateWithoutLocationsInput } from "../inputs/ExperienceCreateWithoutLocationsInput";
import { ExperienceWhereUniqueInput } from "../inputs/ExperienceWhereUniqueInput";
export declare class ExperienceCreateNestedOneWithoutLocationsInput {
    create?: ExperienceCreateWithoutLocationsInput | undefined;
    connectOrCreate?: ExperienceCreateOrConnectWithoutLocationsInput | undefined;
    connect?: ExperienceWhereUniqueInput | undefined;
}
