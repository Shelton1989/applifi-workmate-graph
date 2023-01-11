import { CurrencyCreateOrConnectWithoutPricesInput } from "../inputs/CurrencyCreateOrConnectWithoutPricesInput";
import { CurrencyCreateWithoutPricesInput } from "../inputs/CurrencyCreateWithoutPricesInput";
import { CurrencyWhereUniqueInput } from "../inputs/CurrencyWhereUniqueInput";
export declare class CurrencyCreateNestedOneWithoutPricesInput {
    create?: CurrencyCreateWithoutPricesInput | undefined;
    connectOrCreate?: CurrencyCreateOrConnectWithoutPricesInput | undefined;
    connect?: CurrencyWhereUniqueInput | undefined;
}
