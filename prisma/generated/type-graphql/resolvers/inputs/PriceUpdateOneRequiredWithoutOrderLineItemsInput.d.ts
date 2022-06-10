import { PriceCreateOrConnectWithoutOrderLineItemsInput } from "../inputs/PriceCreateOrConnectWithoutOrderLineItemsInput";
import { PriceCreateWithoutOrderLineItemsInput } from "../inputs/PriceCreateWithoutOrderLineItemsInput";
import { PriceUpdateWithoutOrderLineItemsInput } from "../inputs/PriceUpdateWithoutOrderLineItemsInput";
import { PriceUpsertWithoutOrderLineItemsInput } from "../inputs/PriceUpsertWithoutOrderLineItemsInput";
import { PriceWhereUniqueInput } from "../inputs/PriceWhereUniqueInput";
export declare class PriceUpdateOneRequiredWithoutOrderLineItemsInput {
    create?: PriceCreateWithoutOrderLineItemsInput | undefined;
    connectOrCreate?: PriceCreateOrConnectWithoutOrderLineItemsInput | undefined;
    upsert?: PriceUpsertWithoutOrderLineItemsInput | undefined;
    connect?: PriceWhereUniqueInput | undefined;
    update?: PriceUpdateWithoutOrderLineItemsInput | undefined;
}
