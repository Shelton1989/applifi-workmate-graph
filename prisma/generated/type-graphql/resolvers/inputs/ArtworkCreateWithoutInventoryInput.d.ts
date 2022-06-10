import { ArtworkCreateproductIdsInput } from "../inputs/ArtworkCreateproductIdsInput";
import { OrderLineItemCreateNestedManyWithoutSelectedArtworkInput } from "../inputs/OrderLineItemCreateNestedManyWithoutSelectedArtworkInput";
import { ProductCreateNestedManyWithoutArtworkInput } from "../inputs/ProductCreateNestedManyWithoutArtworkInput";
export declare class ArtworkCreateWithoutInventoryInput {
    id?: string | undefined;
    title: string;
    description: string;
    caption: string;
    url: string;
    Products?: ProductCreateNestedManyWithoutArtworkInput | undefined;
    productIds?: ArtworkCreateproductIdsInput | undefined;
    OrderLineItems?: OrderLineItemCreateNestedManyWithoutSelectedArtworkInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
