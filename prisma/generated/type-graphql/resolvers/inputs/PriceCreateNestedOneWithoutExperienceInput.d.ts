import { PriceCreateOrConnectWithoutExperienceInput } from "../inputs/PriceCreateOrConnectWithoutExperienceInput";
import { PriceCreateWithoutExperienceInput } from "../inputs/PriceCreateWithoutExperienceInput";
import { PriceWhereUniqueInput } from "../inputs/PriceWhereUniqueInput";
export declare class PriceCreateNestedOneWithoutExperienceInput {
    create?: PriceCreateWithoutExperienceInput | undefined;
    connectOrCreate?: PriceCreateOrConnectWithoutExperienceInput | undefined;
    connect?: PriceWhereUniqueInput | undefined;
}
