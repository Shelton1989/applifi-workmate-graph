import { ProductCreateartworkIdsInput } from "../inputs/ProductCreateartworkIdsInput";
import { ProductCreatecolorIdsInput } from "../inputs/ProductCreatecolorIdsInput";
import { ProductCreategalleryInput } from "../inputs/ProductCreategalleryInput";
import { ProductCreatelikedByIdsInput } from "../inputs/ProductCreatelikedByIdsInput";
import { ProductCreatesizeIdsInput } from "../inputs/ProductCreatesizeIdsInput";
export declare class ProductCreateManyInventoryInput {
    id?: string | undefined;
    publishStatus?: "DRAFT" | "PUBLISHED" | "UNPUBLISHED" | "UNDER_REVIEW" | "PENDING_APPROVAL" | "IN_REVIEW" | "APPROVED" | "NO_ACTION_TAKEN" | "REJECTED_WITH_REASON" | "DECLINED" | "BANNED" | "SOFT_BANNED" | undefined;
    description?: string | undefined;
    priceId?: string | undefined;
    availableQuantity?: number | undefined;
    photo?: string | undefined;
    gallery?: ProductCreategalleryInput | undefined;
    baseProductId?: string | undefined;
    artworkIds?: ProductCreateartworkIdsInput | undefined;
    colorIds?: ProductCreatecolorIdsInput | undefined;
    sizeIds?: ProductCreatesizeIdsInput | undefined;
    likedByIds?: ProductCreatelikedByIdsInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
