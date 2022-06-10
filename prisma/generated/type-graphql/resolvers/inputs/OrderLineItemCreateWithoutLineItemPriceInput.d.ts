import { ArtworkCreateNestedOneWithoutOrderLineItemsInput } from "../inputs/ArtworkCreateNestedOneWithoutOrderLineItemsInput";
import { ColorCreateNestedOneWithoutOrderLineItemsInput } from "../inputs/ColorCreateNestedOneWithoutOrderLineItemsInput";
import { OrderCreateNestedOneWithoutItemsInput } from "../inputs/OrderCreateNestedOneWithoutItemsInput";
import { ProductCreateNestedOneWithoutOrderLineItemsInput } from "../inputs/ProductCreateNestedOneWithoutOrderLineItemsInput";
import { SizeCreateNestedOneWithoutOrderLineItemsInput } from "../inputs/SizeCreateNestedOneWithoutOrderLineItemsInput";
export declare class OrderLineItemCreateWithoutLineItemPriceInput {
    id?: string | undefined;
    SelectedProduct: ProductCreateNestedOneWithoutOrderLineItemsInput;
    SelectedColor: ColorCreateNestedOneWithoutOrderLineItemsInput;
    SelectedArtwork: ArtworkCreateNestedOneWithoutOrderLineItemsInput;
    SelectedSize: SizeCreateNestedOneWithoutOrderLineItemsInput;
    Order: OrderCreateNestedOneWithoutItemsInput;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
