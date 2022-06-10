import { PriceCreateOrConnectWithoutProductsInput } from "../inputs/PriceCreateOrConnectWithoutProductsInput";
import { PriceCreateWithoutProductsInput } from "../inputs/PriceCreateWithoutProductsInput";
import { PriceWhereUniqueInput } from "../inputs/PriceWhereUniqueInput";
export declare class PriceCreateNestedOneWithoutProductsInput {
    create?: PriceCreateWithoutProductsInput | undefined;
    connectOrCreate?: PriceCreateOrConnectWithoutProductsInput | undefined;
    connect?: PriceWhereUniqueInput | undefined;
}
