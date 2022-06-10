import { ArtworkCreateNestedOneWithoutOrderLineItemsInput } from "../inputs/ArtworkCreateNestedOneWithoutOrderLineItemsInput";
import { ColorCreateNestedOneWithoutOrderLineItemsInput } from "../inputs/ColorCreateNestedOneWithoutOrderLineItemsInput";
import { OrderCreateNestedOneWithoutItemsInput } from "../inputs/OrderCreateNestedOneWithoutItemsInput";
import { PriceCreateNestedOneWithoutOrderLineItemsInput } from "../inputs/PriceCreateNestedOneWithoutOrderLineItemsInput";
import { ProductCreateNestedOneWithoutOrderLineItemsInput } from "../inputs/ProductCreateNestedOneWithoutOrderLineItemsInput";
export declare class OrderLineItemCreateWithoutSelectedSizeInput {
    id?: string | undefined;
    lineItemPrice: PriceCreateNestedOneWithoutOrderLineItemsInput;
    SelectedProduct: ProductCreateNestedOneWithoutOrderLineItemsInput;
    SelectedColor: ColorCreateNestedOneWithoutOrderLineItemsInput;
    SelectedArtwork: ArtworkCreateNestedOneWithoutOrderLineItemsInput;
    Order: OrderCreateNestedOneWithoutItemsInput;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
