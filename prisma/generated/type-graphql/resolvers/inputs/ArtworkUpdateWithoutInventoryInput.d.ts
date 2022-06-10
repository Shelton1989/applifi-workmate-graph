import { ArtworkUpdateproductIdsInput } from "../inputs/ArtworkUpdateproductIdsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { OrderLineItemUpdateManyWithoutSelectedArtworkInput } from "../inputs/OrderLineItemUpdateManyWithoutSelectedArtworkInput";
import { ProductUpdateManyWithoutArtworkInput } from "../inputs/ProductUpdateManyWithoutArtworkInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ArtworkUpdateWithoutInventoryInput {
    title?: StringFieldUpdateOperationsInput | undefined;
    description?: StringFieldUpdateOperationsInput | undefined;
    caption?: StringFieldUpdateOperationsInput | undefined;
    url?: StringFieldUpdateOperationsInput | undefined;
    Products?: ProductUpdateManyWithoutArtworkInput | undefined;
    productIds?: ArtworkUpdateproductIdsInput | undefined;
    OrderLineItems?: OrderLineItemUpdateManyWithoutSelectedArtworkInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
