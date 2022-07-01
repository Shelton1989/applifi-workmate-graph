import { ProductCreateartworkIdsInput } from "../inputs/ProductCreateartworkIdsInput";
import { ProductCreatecolorIdsInput } from "../inputs/ProductCreatecolorIdsInput";
import { ProductCreategalleryInput } from "../inputs/ProductCreategalleryInput";
import { ProductCreatelikedByIdsInput } from "../inputs/ProductCreatelikedByIdsInput";
import { ProductCreatesizeIdsInput } from "../inputs/ProductCreatesizeIdsInput";
export declare class ProductCreateManyPriceInput {
    id?: string | undefined;
    description?: string | undefined;
    availableQuantity?: number | undefined;
    photo?: string | undefined;
    gallery?: ProductCreategalleryInput | undefined;
    baseProductId?: string | undefined;
    artworkIds?: ProductCreateartworkIdsInput | undefined;
    colorIds?: ProductCreatecolorIdsInput | undefined;
    sizeIds?: ProductCreatesizeIdsInput | undefined;
    likedByIds?: ProductCreatelikedByIdsInput | undefined;
    inventoryId: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
