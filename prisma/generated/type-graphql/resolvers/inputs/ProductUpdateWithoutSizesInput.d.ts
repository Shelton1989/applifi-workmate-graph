import { ArtworkUpdateManyWithoutProductsInput } from "../inputs/ArtworkUpdateManyWithoutProductsInput";
import { BrandProductUpdateOneWithoutProductsInput } from "../inputs/BrandProductUpdateOneWithoutProductsInput";
import { ColorUpdateManyWithoutProductsInput } from "../inputs/ColorUpdateManyWithoutProductsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { InventoryUpdateOneRequiredWithoutProductsInput } from "../inputs/InventoryUpdateOneRequiredWithoutProductsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { OrderLineItemUpdateManyWithoutSelectedProductInput } from "../inputs/OrderLineItemUpdateManyWithoutSelectedProductInput";
import { PriceUpdateOneWithoutProductsInput } from "../inputs/PriceUpdateOneWithoutProductsInput";
import { ProductUpdateartworkIdsInput } from "../inputs/ProductUpdateartworkIdsInput";
import { ProductUpdatecolorIdsInput } from "../inputs/ProductUpdatecolorIdsInput";
import { ProductUpdategalleryInput } from "../inputs/ProductUpdategalleryInput";
import { ProductUpdatelikedByIdsInput } from "../inputs/ProductUpdatelikedByIdsInput";
import { ProductUpdatesizeIdsInput } from "../inputs/ProductUpdatesizeIdsInput";
import { UserUpdateManyWithoutLikedProductsInput } from "../inputs/UserUpdateManyWithoutLikedProductsInput";
export declare class ProductUpdateWithoutSizesInput {
    description?: NullableStringFieldUpdateOperationsInput | undefined;
    price?: PriceUpdateOneWithoutProductsInput | undefined;
    availableQuantity?: NullableIntFieldUpdateOperationsInput | undefined;
    photo?: NullableStringFieldUpdateOperationsInput | undefined;
    gallery?: ProductUpdategalleryInput | undefined;
    BaseProduct?: BrandProductUpdateOneWithoutProductsInput | undefined;
    Artwork?: ArtworkUpdateManyWithoutProductsInput | undefined;
    artworkIds?: ProductUpdateartworkIdsInput | undefined;
    Colors?: ColorUpdateManyWithoutProductsInput | undefined;
    colorIds?: ProductUpdatecolorIdsInput | undefined;
    sizeIds?: ProductUpdatesizeIdsInput | undefined;
    OrderLineItems?: OrderLineItemUpdateManyWithoutSelectedProductInput | undefined;
    LikedBy?: UserUpdateManyWithoutLikedProductsInput | undefined;
    likedByIds?: ProductUpdatelikedByIdsInput | undefined;
    Inventory?: InventoryUpdateOneRequiredWithoutProductsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
