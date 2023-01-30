import { ExperienceCreateOrConnectWithoutFeaturesInput } from "../inputs/ExperienceCreateOrConnectWithoutFeaturesInput";
import { ExperienceCreateWithoutFeaturesInput } from "../inputs/ExperienceCreateWithoutFeaturesInput";
import { ExperienceUpdateWithoutFeaturesInput } from "../inputs/ExperienceUpdateWithoutFeaturesInput";
import { ExperienceUpsertWithoutFeaturesInput } from "../inputs/ExperienceUpsertWithoutFeaturesInput";
import { ExperienceWhereUniqueInput } from "../inputs/ExperienceWhereUniqueInput";
export declare class ExperienceUpdateOneRequiredWithoutFeaturesInput {
    create?: ExperienceCreateWithoutFeaturesInput | undefined;
    connectOrCreate?: ExperienceCreateOrConnectWithoutFeaturesInput | undefined;
    upsert?: ExperienceUpsertWithoutFeaturesInput | undefined;
    connect?: ExperienceWhereUniqueInput | undefined;
    update?: ExperienceUpdateWithoutFeaturesInput | undefined;
}
