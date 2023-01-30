import { ExperienceCreateOrConnectWithoutFeaturesInput } from "../inputs/ExperienceCreateOrConnectWithoutFeaturesInput";
import { ExperienceCreateWithoutFeaturesInput } from "../inputs/ExperienceCreateWithoutFeaturesInput";
import { ExperienceWhereUniqueInput } from "../inputs/ExperienceWhereUniqueInput";
export declare class ExperienceCreateNestedOneWithoutFeaturesInput {
    create?: ExperienceCreateWithoutFeaturesInput | undefined;
    connectOrCreate?: ExperienceCreateOrConnectWithoutFeaturesInput | undefined;
    connect?: ExperienceWhereUniqueInput | undefined;
}
