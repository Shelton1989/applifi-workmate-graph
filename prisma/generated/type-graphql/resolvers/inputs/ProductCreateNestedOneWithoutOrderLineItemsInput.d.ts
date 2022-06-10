import { ProductCreateOrConnectWithoutOrderLineItemsInput } from "../inputs/ProductCreateOrConnectWithoutOrderLineItemsInput";
import { ProductCreateWithoutOrderLineItemsInput } from "../inputs/ProductCreateWithoutOrderLineItemsInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";
export declare class ProductCreateNestedOneWithoutOrderLineItemsInput {
    create?: ProductCreateWithoutOrderLineItemsInput | undefined;
    connectOrCreate?: ProductCreateOrConnectWithoutOrderLineItemsInput | undefined;
    connect?: ProductWhereUniqueInput | undefined;
}
