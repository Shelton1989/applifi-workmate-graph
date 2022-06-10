import { PriceCreateOrConnectWithoutOrderLineItemsInput } from "../inputs/PriceCreateOrConnectWithoutOrderLineItemsInput";
import { PriceCreateWithoutOrderLineItemsInput } from "../inputs/PriceCreateWithoutOrderLineItemsInput";
import { PriceWhereUniqueInput } from "../inputs/PriceWhereUniqueInput";
export declare class PriceCreateNestedOneWithoutOrderLineItemsInput {
    create?: PriceCreateWithoutOrderLineItemsInput | undefined;
    connectOrCreate?: PriceCreateOrConnectWithoutOrderLineItemsInput | undefined;
    connect?: PriceWhereUniqueInput | undefined;
}
