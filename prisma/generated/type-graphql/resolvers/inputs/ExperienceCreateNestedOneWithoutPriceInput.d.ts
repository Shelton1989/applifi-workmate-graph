import { ExperienceCreateOrConnectWithoutPriceInput } from "../inputs/ExperienceCreateOrConnectWithoutPriceInput";
import { ExperienceCreateWithoutPriceInput } from "../inputs/ExperienceCreateWithoutPriceInput";
import { ExperienceWhereUniqueInput } from "../inputs/ExperienceWhereUniqueInput";
export declare class ExperienceCreateNestedOneWithoutPriceInput {
    create?: ExperienceCreateWithoutPriceInput | undefined;
    connectOrCreate?: ExperienceCreateOrConnectWithoutPriceInput | undefined;
    connect?: ExperienceWhereUniqueInput | undefined;
}
