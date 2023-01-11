import { PriceCreateManyExperienceInputEnvelope } from "../inputs/PriceCreateManyExperienceInputEnvelope";
import { PriceCreateOrConnectWithoutExperienceInput } from "../inputs/PriceCreateOrConnectWithoutExperienceInput";
import { PriceCreateWithoutExperienceInput } from "../inputs/PriceCreateWithoutExperienceInput";
import { PriceWhereUniqueInput } from "../inputs/PriceWhereUniqueInput";
export declare class PriceCreateNestedManyWithoutExperienceInput {
    create?: PriceCreateWithoutExperienceInput[] | undefined;
    connectOrCreate?: PriceCreateOrConnectWithoutExperienceInput[] | undefined;
    createMany?: PriceCreateManyExperienceInputEnvelope | undefined;
    connect?: PriceWhereUniqueInput[] | undefined;
}
