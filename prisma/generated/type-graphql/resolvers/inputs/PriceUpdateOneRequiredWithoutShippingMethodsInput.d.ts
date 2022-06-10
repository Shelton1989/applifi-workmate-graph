import { PriceCreateOrConnectWithoutShippingMethodsInput } from "../inputs/PriceCreateOrConnectWithoutShippingMethodsInput";
import { PriceCreateWithoutShippingMethodsInput } from "../inputs/PriceCreateWithoutShippingMethodsInput";
import { PriceUpdateWithoutShippingMethodsInput } from "../inputs/PriceUpdateWithoutShippingMethodsInput";
import { PriceUpsertWithoutShippingMethodsInput } from "../inputs/PriceUpsertWithoutShippingMethodsInput";
import { PriceWhereUniqueInput } from "../inputs/PriceWhereUniqueInput";
export declare class PriceUpdateOneRequiredWithoutShippingMethodsInput {
    create?: PriceCreateWithoutShippingMethodsInput | undefined;
    connectOrCreate?: PriceCreateOrConnectWithoutShippingMethodsInput | undefined;
    upsert?: PriceUpsertWithoutShippingMethodsInput | undefined;
    connect?: PriceWhereUniqueInput | undefined;
    update?: PriceUpdateWithoutShippingMethodsInput | undefined;
}
