import { ArtworkCreateproductIdsInput } from "../inputs/ArtworkCreateproductIdsInput";
import { InventoryCreateNestedOneWithoutArtworkInput } from "../inputs/InventoryCreateNestedOneWithoutArtworkInput";
import { OrderLineItemCreateNestedManyWithoutSelectedArtworkInput } from "../inputs/OrderLineItemCreateNestedManyWithoutSelectedArtworkInput";
export declare class ArtworkCreateWithoutProductsInput {
    id?: string | undefined;
    title: string;
    description: string;
    caption: string;
    url: string;
    productIds?: ArtworkCreateproductIdsInput | undefined;
    Inventory: InventoryCreateNestedOneWithoutArtworkInput;
    OrderLineItems?: OrderLineItemCreateNestedManyWithoutSelectedArtworkInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
