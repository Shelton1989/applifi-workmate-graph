import { PriceCreateManyCurrencyInputEnvelope } from "../inputs/PriceCreateManyCurrencyInputEnvelope";
import { PriceCreateOrConnectWithoutCurrencyInput } from "../inputs/PriceCreateOrConnectWithoutCurrencyInput";
import { PriceCreateWithoutCurrencyInput } from "../inputs/PriceCreateWithoutCurrencyInput";
import { PriceWhereUniqueInput } from "../inputs/PriceWhereUniqueInput";
export declare class PriceCreateNestedManyWithoutCurrencyInput {
    create?: PriceCreateWithoutCurrencyInput[] | undefined;
    connectOrCreate?: PriceCreateOrConnectWithoutCurrencyInput[] | undefined;
    createMany?: PriceCreateManyCurrencyInputEnvelope | undefined;
    connect?: PriceWhereUniqueInput[] | undefined;
}
