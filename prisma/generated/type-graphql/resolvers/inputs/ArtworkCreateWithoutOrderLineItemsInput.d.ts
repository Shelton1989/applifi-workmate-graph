import { ArtworkCreateproductIdsInput } from "../inputs/ArtworkCreateproductIdsInput";
import { InventoryCreateNestedOneWithoutArtworkInput } from "../inputs/InventoryCreateNestedOneWithoutArtworkInput";
import { ProductCreateNestedManyWithoutArtworkInput } from "../inputs/ProductCreateNestedManyWithoutArtworkInput";
export declare class ArtworkCreateWithoutOrderLineItemsInput {
    id?: string | undefined;
    title: string;
    description: string;
    caption: string;
    url: string;
    Products?: ProductCreateNestedManyWithoutArtworkInput | undefined;
    productIds?: ArtworkCreateproductIdsInput | undefined;
    Inventory: InventoryCreateNestedOneWithoutArtworkInput;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
