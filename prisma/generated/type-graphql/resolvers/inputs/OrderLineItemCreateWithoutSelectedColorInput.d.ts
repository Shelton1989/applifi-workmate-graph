import { ArtworkCreateNestedOneWithoutOrderLineItemsInput } from "../inputs/ArtworkCreateNestedOneWithoutOrderLineItemsInput";
import { OrderCreateNestedOneWithoutItemsInput } from "../inputs/OrderCreateNestedOneWithoutItemsInput";
import { PriceCreateNestedOneWithoutOrderLineItemsInput } from "../inputs/PriceCreateNestedOneWithoutOrderLineItemsInput";
import { ProductCreateNestedOneWithoutOrderLineItemsInput } from "../inputs/ProductCreateNestedOneWithoutOrderLineItemsInput";
import { SizeCreateNestedOneWithoutOrderLineItemsInput } from "../inputs/SizeCreateNestedOneWithoutOrderLineItemsInput";
export declare class OrderLineItemCreateWithoutSelectedColorInput {
    id?: string | undefined;
    lineItemPrice: PriceCreateNestedOneWithoutOrderLineItemsInput;
    SelectedProduct: ProductCreateNestedOneWithoutOrderLineItemsInput;
    SelectedArtwork: ArtworkCreateNestedOneWithoutOrderLineItemsInput;
    SelectedSize: SizeCreateNestedOneWithoutOrderLineItemsInput;
    Order: OrderCreateNestedOneWithoutItemsInput;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
