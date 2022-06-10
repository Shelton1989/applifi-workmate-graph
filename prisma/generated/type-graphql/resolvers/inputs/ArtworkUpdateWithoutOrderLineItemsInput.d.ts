import { ArtworkUpdateproductIdsInput } from "../inputs/ArtworkUpdateproductIdsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { InventoryUpdateOneRequiredWithoutArtworkInput } from "../inputs/InventoryUpdateOneRequiredWithoutArtworkInput";
import { ProductUpdateManyWithoutArtworkInput } from "../inputs/ProductUpdateManyWithoutArtworkInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ArtworkUpdateWithoutOrderLineItemsInput {
    title?: StringFieldUpdateOperationsInput | undefined;
    description?: StringFieldUpdateOperationsInput | undefined;
    caption?: StringFieldUpdateOperationsInput | undefined;
    url?: StringFieldUpdateOperationsInput | undefined;
    Products?: ProductUpdateManyWithoutArtworkInput | undefined;
    productIds?: ArtworkUpdateproductIdsInput | undefined;
    Inventory?: InventoryUpdateOneRequiredWithoutArtworkInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
