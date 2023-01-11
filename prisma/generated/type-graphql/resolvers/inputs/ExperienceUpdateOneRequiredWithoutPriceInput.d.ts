import { ExperienceCreateOrConnectWithoutPriceInput } from "../inputs/ExperienceCreateOrConnectWithoutPriceInput";
import { ExperienceCreateWithoutPriceInput } from "../inputs/ExperienceCreateWithoutPriceInput";
import { ExperienceUpdateWithoutPriceInput } from "../inputs/ExperienceUpdateWithoutPriceInput";
import { ExperienceUpsertWithoutPriceInput } from "../inputs/ExperienceUpsertWithoutPriceInput";
import { ExperienceWhereUniqueInput } from "../inputs/ExperienceWhereUniqueInput";
export declare class ExperienceUpdateOneRequiredWithoutPriceInput {
    create?: ExperienceCreateWithoutPriceInput | undefined;
    connectOrCreate?: ExperienceCreateOrConnectWithoutPriceInput | undefined;
    upsert?: ExperienceUpsertWithoutPriceInput | undefined;
    connect?: ExperienceWhereUniqueInput | undefined;
    update?: ExperienceUpdateWithoutPriceInput | undefined;
}
