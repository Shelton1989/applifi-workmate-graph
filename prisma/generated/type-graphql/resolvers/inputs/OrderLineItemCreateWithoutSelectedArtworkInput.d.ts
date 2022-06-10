import { ColorCreateNestedOneWithoutOrderLineItemsInput } from "../inputs/ColorCreateNestedOneWithoutOrderLineItemsInput";
import { OrderCreateNestedOneWithoutItemsInput } from "../inputs/OrderCreateNestedOneWithoutItemsInput";
import { PriceCreateNestedOneWithoutOrderLineItemsInput } from "../inputs/PriceCreateNestedOneWithoutOrderLineItemsInput";
import { ProductCreateNestedOneWithoutOrderLineItemsInput } from "../inputs/ProductCreateNestedOneWithoutOrderLineItemsInput";
import { SizeCreateNestedOneWithoutOrderLineItemsInput } from "../inputs/SizeCreateNestedOneWithoutOrderLineItemsInput";
export declare class OrderLineItemCreateWithoutSelectedArtworkInput {
    id?: string | undefined;
    lineItemPrice: PriceCreateNestedOneWithoutOrderLineItemsInput;
    SelectedProduct: ProductCreateNestedOneWithoutOrderLineItemsInput;
    SelectedColor: ColorCreateNestedOneWithoutOrderLineItemsInput;
    SelectedSize: SizeCreateNestedOneWithoutOrderLineItemsInput;
    Order: OrderCreateNestedOneWithoutItemsInput;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
