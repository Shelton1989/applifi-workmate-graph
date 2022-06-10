import { SizeCreateOrConnectWithoutOrderLineItemsInput } from "../inputs/SizeCreateOrConnectWithoutOrderLineItemsInput";
import { SizeCreateWithoutOrderLineItemsInput } from "../inputs/SizeCreateWithoutOrderLineItemsInput";
import { SizeWhereUniqueInput } from "../inputs/SizeWhereUniqueInput";
export declare class SizeCreateNestedOneWithoutOrderLineItemsInput {
    create?: SizeCreateWithoutOrderLineItemsInput | undefined;
    connectOrCreate?: SizeCreateOrConnectWithoutOrderLineItemsInput | undefined;
    connect?: SizeWhereUniqueInput | undefined;
}
