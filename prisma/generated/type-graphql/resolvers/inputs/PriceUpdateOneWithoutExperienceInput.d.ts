import { PriceCreateOrConnectWithoutExperienceInput } from "../inputs/PriceCreateOrConnectWithoutExperienceInput";
import { PriceCreateWithoutExperienceInput } from "../inputs/PriceCreateWithoutExperienceInput";
import { PriceUpdateWithoutExperienceInput } from "../inputs/PriceUpdateWithoutExperienceInput";
import { PriceUpsertWithoutExperienceInput } from "../inputs/PriceUpsertWithoutExperienceInput";
import { PriceWhereUniqueInput } from "../inputs/PriceWhereUniqueInput";
export declare class PriceUpdateOneWithoutExperienceInput {
    create?: PriceCreateWithoutExperienceInput | undefined;
    connectOrCreate?: PriceCreateOrConnectWithoutExperienceInput | undefined;
    upsert?: PriceUpsertWithoutExperienceInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: PriceWhereUniqueInput | undefined;
    update?: PriceUpdateWithoutExperienceInput | undefined;
}
