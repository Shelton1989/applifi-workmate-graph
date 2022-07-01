import { PriceCreateOrConnectWithoutProductsInput } from "../inputs/PriceCreateOrConnectWithoutProductsInput";
import { PriceCreateWithoutProductsInput } from "../inputs/PriceCreateWithoutProductsInput";
import { PriceUpdateWithoutProductsInput } from "../inputs/PriceUpdateWithoutProductsInput";
import { PriceUpsertWithoutProductsInput } from "../inputs/PriceUpsertWithoutProductsInput";
import { PriceWhereUniqueInput } from "../inputs/PriceWhereUniqueInput";
export declare class PriceUpdateOneWithoutProductsInput {
    create?: PriceCreateWithoutProductsInput | undefined;
    connectOrCreate?: PriceCreateOrConnectWithoutProductsInput | undefined;
    upsert?: PriceUpsertWithoutProductsInput | undefined;
    disconnect?: boolean | undefined;
    delete?: boolean | undefined;
    connect?: PriceWhereUniqueInput | undefined;
    update?: PriceUpdateWithoutProductsInput | undefined;
}
