import { CurrencyCreateOrConnectWithoutPricesInput } from "../inputs/CurrencyCreateOrConnectWithoutPricesInput";
import { CurrencyCreateWithoutPricesInput } from "../inputs/CurrencyCreateWithoutPricesInput";
import { CurrencyUpdateWithoutPricesInput } from "../inputs/CurrencyUpdateWithoutPricesInput";
import { CurrencyUpsertWithoutPricesInput } from "../inputs/CurrencyUpsertWithoutPricesInput";
import { CurrencyWhereUniqueInput } from "../inputs/CurrencyWhereUniqueInput";
export declare class CurrencyUpdateOneRequiredWithoutPricesInput {
    create?: CurrencyCreateWithoutPricesInput | undefined;
    connectOrCreate?: CurrencyCreateOrConnectWithoutPricesInput | undefined;
    upsert?: CurrencyUpsertWithoutPricesInput | undefined;
    connect?: CurrencyWhereUniqueInput | undefined;
    update?: CurrencyUpdateWithoutPricesInput | undefined;
}
