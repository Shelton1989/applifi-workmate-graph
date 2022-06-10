import { ArtworkCreateproductIdsInput } from "../inputs/ArtworkCreateproductIdsInput";
export declare class ArtworkCreateManyInventoryInput {
    id?: string | undefined;
    title: string;
    description: string;
    caption: string;
    url: string;
    productIds?: ArtworkCreateproductIdsInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
