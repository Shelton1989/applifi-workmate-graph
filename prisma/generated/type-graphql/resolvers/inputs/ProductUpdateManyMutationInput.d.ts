import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { ProductUpdateartworkIdsInput } from "../inputs/ProductUpdateartworkIdsInput";
import { ProductUpdatecolorIdsInput } from "../inputs/ProductUpdatecolorIdsInput";
import { ProductUpdategalleryInput } from "../inputs/ProductUpdategalleryInput";
import { ProductUpdatelikedByIdsInput } from "../inputs/ProductUpdatelikedByIdsInput";
import { ProductUpdatesizeIdsInput } from "../inputs/ProductUpdatesizeIdsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ProductUpdateManyMutationInput {
    description?: StringFieldUpdateOperationsInput | undefined;
    availableQuantity?: IntFieldUpdateOperationsInput | undefined;
    photo?: StringFieldUpdateOperationsInput | undefined;
    gallery?: ProductUpdategalleryInput | undefined;
    artworkIds?: ProductUpdateartworkIdsInput | undefined;
    colorIds?: ProductUpdatecolorIdsInput | undefined;
    sizeIds?: ProductUpdatesizeIdsInput | undefined;
    likedByIds?: ProductUpdatelikedByIdsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
