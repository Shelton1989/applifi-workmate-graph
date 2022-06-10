import { ColorCreateOrConnectWithoutOrderLineItemsInput } from "../inputs/ColorCreateOrConnectWithoutOrderLineItemsInput";
import { ColorCreateWithoutOrderLineItemsInput } from "../inputs/ColorCreateWithoutOrderLineItemsInput";
import { ColorWhereUniqueInput } from "../inputs/ColorWhereUniqueInput";
export declare class ColorCreateNestedOneWithoutOrderLineItemsInput {
    create?: ColorCreateWithoutOrderLineItemsInput | undefined;
    connectOrCreate?: ColorCreateOrConnectWithoutOrderLineItemsInput | undefined;
    connect?: ColorWhereUniqueInput | undefined;
}
