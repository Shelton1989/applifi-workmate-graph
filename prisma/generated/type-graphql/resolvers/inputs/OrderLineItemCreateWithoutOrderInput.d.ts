import { ArtworkCreateNestedOneWithoutOrderLineItemsInput } from "../inputs/ArtworkCreateNestedOneWithoutOrderLineItemsInput";
import { ColorCreateNestedOneWithoutOrderLineItemsInput } from "../inputs/ColorCreateNestedOneWithoutOrderLineItemsInput";
import { PriceCreateNestedOneWithoutOrderLineItemsInput } from "../inputs/PriceCreateNestedOneWithoutOrderLineItemsInput";
import { ProductCreateNestedOneWithoutOrderLineItemsInput } from "../inputs/ProductCreateNestedOneWithoutOrderLineItemsInput";
import { SizeCreateNestedOneWithoutOrderLineItemsInput } from "../inputs/SizeCreateNestedOneWithoutOrderLineItemsInput";
export declare class OrderLineItemCreateWithoutOrderInput {
    id?: string | undefined;
    lineItemPrice: PriceCreateNestedOneWithoutOrderLineItemsInput;
    SelectedProduct: ProductCreateNestedOneWithoutOrderLineItemsInput;
    SelectedColor: ColorCreateNestedOneWithoutOrderLineItemsInput;
    SelectedArtwork: ArtworkCreateNestedOneWithoutOrderLineItemsInput;
    SelectedSize: SizeCreateNestedOneWithoutOrderLineItemsInput;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
