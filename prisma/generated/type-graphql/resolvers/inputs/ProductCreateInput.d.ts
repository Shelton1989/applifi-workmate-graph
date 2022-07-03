import { ArtworkCreateNestedManyWithoutProductsInput } from "../inputs/ArtworkCreateNestedManyWithoutProductsInput";
import { BrandProductCreateNestedOneWithoutProductsInput } from "../inputs/BrandProductCreateNestedOneWithoutProductsInput";
import { ColorCreateNestedManyWithoutProductsInput } from "../inputs/ColorCreateNestedManyWithoutProductsInput";
import { InventoryCreateNestedOneWithoutProductsInput } from "../inputs/InventoryCreateNestedOneWithoutProductsInput";
import { OrderLineItemCreateNestedManyWithoutSelectedProductInput } from "../inputs/OrderLineItemCreateNestedManyWithoutSelectedProductInput";
import { PriceCreateNestedOneWithoutProductsInput } from "../inputs/PriceCreateNestedOneWithoutProductsInput";
import { ProductCreateartworkIdsInput } from "../inputs/ProductCreateartworkIdsInput";
import { ProductCreatecolorIdsInput } from "../inputs/ProductCreatecolorIdsInput";
import { ProductCreategalleryInput } from "../inputs/ProductCreategalleryInput";
import { ProductCreatelikedByIdsInput } from "../inputs/ProductCreatelikedByIdsInput";
import { ProductCreatesizeIdsInput } from "../inputs/ProductCreatesizeIdsInput";
import { SizeCreateNestedManyWithoutProductsInput } from "../inputs/SizeCreateNestedManyWithoutProductsInput";
import { UserCreateNestedManyWithoutLikedProductsInput } from "../inputs/UserCreateNestedManyWithoutLikedProductsInput";
export declare class ProductCreateInput {
    id?: string | undefined;
    publishStatus?: "DRAFT" | "PUBLISHED" | "UNDER_REVIEW" | "PENDING_APPROVAL" | "IN_REVIEW" | "APPROVED" | "NO_ACTION_TAKEN" | "REJECTED_WITH_REASON" | "DECLINED" | "BANNED" | "SOFT_BANNED" | undefined;
    description?: string | undefined;
    price?: PriceCreateNestedOneWithoutProductsInput | undefined;
    availableQuantity?: number | undefined;
    photo?: string | undefined;
    gallery?: ProductCreategalleryInput | undefined;
    BaseProduct?: BrandProductCreateNestedOneWithoutProductsInput | undefined;
    Artwork?: ArtworkCreateNestedManyWithoutProductsInput | undefined;
    artworkIds?: ProductCreateartworkIdsInput | undefined;
    Colors?: ColorCreateNestedManyWithoutProductsInput | undefined;
    colorIds?: ProductCreatecolorIdsInput | undefined;
    Sizes?: SizeCreateNestedManyWithoutProductsInput | undefined;
    sizeIds?: ProductCreatesizeIdsInput | undefined;
    OrderLineItems?: OrderLineItemCreateNestedManyWithoutSelectedProductInput | undefined;
    LikedBy?: UserCreateNestedManyWithoutLikedProductsInput | undefined;
    likedByIds?: ProductCreatelikedByIdsInput | undefined;
    Inventory: InventoryCreateNestedOneWithoutProductsInput;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
