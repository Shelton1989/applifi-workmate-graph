import { ArtworkCreateproductIdsInput } from "../inputs/ArtworkCreateproductIdsInput";
export declare class ArtworkCreateManyInput {
    id?: string | undefined;
    title: string;
    description: string;
    caption: string;
    url: string;
    productIds?: ArtworkCreateproductIdsInput | undefined;
    inventoryId: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
