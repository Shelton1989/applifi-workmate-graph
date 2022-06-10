import { SizeCreateOrConnectWithoutOrderLineItemsInput } from "../inputs/SizeCreateOrConnectWithoutOrderLineItemsInput";
import { SizeCreateWithoutOrderLineItemsInput } from "../inputs/SizeCreateWithoutOrderLineItemsInput";
import { SizeUpdateWithoutOrderLineItemsInput } from "../inputs/SizeUpdateWithoutOrderLineItemsInput";
import { SizeUpsertWithoutOrderLineItemsInput } from "../inputs/SizeUpsertWithoutOrderLineItemsInput";
import { SizeWhereUniqueInput } from "../inputs/SizeWhereUniqueInput";
export declare class SizeUpdateOneRequiredWithoutOrderLineItemsInput {
    create?: SizeCreateWithoutOrderLineItemsInput | undefined;
    connectOrCreate?: SizeCreateOrConnectWithoutOrderLineItemsInput | undefined;
    upsert?: SizeUpsertWithoutOrderLineItemsInput | undefined;
    connect?: SizeWhereUniqueInput | undefined;
    update?: SizeUpdateWithoutOrderLineItemsInput | undefined;
}
