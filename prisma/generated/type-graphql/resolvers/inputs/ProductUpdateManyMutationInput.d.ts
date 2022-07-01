import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ProductUpdateartworkIdsInput } from "../inputs/ProductUpdateartworkIdsInput";
import { ProductUpdatecolorIdsInput } from "../inputs/ProductUpdatecolorIdsInput";
import { ProductUpdategalleryInput } from "../inputs/ProductUpdategalleryInput";
import { ProductUpdatelikedByIdsInput } from "../inputs/ProductUpdatelikedByIdsInput";
import { ProductUpdatesizeIdsInput } from "../inputs/ProductUpdatesizeIdsInput";
export declare class ProductUpdateManyMutationInput {
    description?: NullableStringFieldUpdateOperationsInput | undefined;
    availableQuantity?: NullableIntFieldUpdateOperationsInput | undefined;
    photo?: NullableStringFieldUpdateOperationsInput | undefined;
    gallery?: ProductUpdategalleryInput | undefined;
    artworkIds?: ProductUpdateartworkIdsInput | undefined;
    colorIds?: ProductUpdatecolorIdsInput | undefined;
    sizeIds?: ProductUpdatesizeIdsInput | undefined;
    likedByIds?: ProductUpdatelikedByIdsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
