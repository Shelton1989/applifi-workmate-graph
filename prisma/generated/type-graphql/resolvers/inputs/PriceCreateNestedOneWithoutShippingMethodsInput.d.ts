import { PriceCreateOrConnectWithoutShippingMethodsInput } from "../inputs/PriceCreateOrConnectWithoutShippingMethodsInput";
import { PriceCreateWithoutShippingMethodsInput } from "../inputs/PriceCreateWithoutShippingMethodsInput";
import { PriceWhereUniqueInput } from "../inputs/PriceWhereUniqueInput";
export declare class PriceCreateNestedOneWithoutShippingMethodsInput {
    create?: PriceCreateWithoutShippingMethodsInput | undefined;
    connectOrCreate?: PriceCreateOrConnectWithoutShippingMethodsInput | undefined;
    connect?: PriceWhereUniqueInput | undefined;
}
