import { ArtworkCreateproductIdsInput } from "../inputs/ArtworkCreateproductIdsInput";
import { InventoryCreateNestedOneWithoutArtworkInput } from "../inputs/InventoryCreateNestedOneWithoutArtworkInput";
import { OrderLineItemCreateNestedManyWithoutSelectedArtworkInput } from "../inputs/OrderLineItemCreateNestedManyWithoutSelectedArtworkInput";
import { ProductCreateNestedManyWithoutArtworkInput } from "../inputs/ProductCreateNestedManyWithoutArtworkInput";
export declare class ArtworkCreateInput {
    id?: string | undefined;
    title: string;
    description: string;
    caption: string;
    url: string;
    Products?: ProductCreateNestedManyWithoutArtworkInput | undefined;
    productIds?: ArtworkCreateproductIdsInput | undefined;
    Inventory: InventoryCreateNestedOneWithoutArtworkInput;
    OrderLineItems?: OrderLineItemCreateNestedManyWithoutSelectedArtworkInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
