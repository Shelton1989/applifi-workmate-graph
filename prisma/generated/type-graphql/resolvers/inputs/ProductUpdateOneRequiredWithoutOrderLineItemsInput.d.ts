import { ProductCreateOrConnectWithoutOrderLineItemsInput } from "../inputs/ProductCreateOrConnectWithoutOrderLineItemsInput";
import { ProductCreateWithoutOrderLineItemsInput } from "../inputs/ProductCreateWithoutOrderLineItemsInput";
import { ProductUpdateWithoutOrderLineItemsInput } from "../inputs/ProductUpdateWithoutOrderLineItemsInput";
import { ProductUpsertWithoutOrderLineItemsInput } from "../inputs/ProductUpsertWithoutOrderLineItemsInput";
import { ProductWhereUniqueInput } from "../inputs/ProductWhereUniqueInput";
export declare class ProductUpdateOneRequiredWithoutOrderLineItemsInput {
    create?: ProductCreateWithoutOrderLineItemsInput | undefined;
    connectOrCreate?: ProductCreateOrConnectWithoutOrderLineItemsInput | undefined;
    upsert?: ProductUpsertWithoutOrderLineItemsInput | undefined;
    connect?: ProductWhereUniqueInput | undefined;
    update?: ProductUpdateWithoutOrderLineItemsInput | undefined;
}
