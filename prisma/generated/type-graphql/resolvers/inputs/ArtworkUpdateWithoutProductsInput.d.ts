import { ArtworkUpdateproductIdsInput } from "../inputs/ArtworkUpdateproductIdsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { InventoryUpdateOneRequiredWithoutArtworkInput } from "../inputs/InventoryUpdateOneRequiredWithoutArtworkInput";
import { OrderLineItemUpdateManyWithoutSelectedArtworkInput } from "../inputs/OrderLineItemUpdateManyWithoutSelectedArtworkInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ArtworkUpdateWithoutProductsInput {
    title?: StringFieldUpdateOperationsInput | undefined;
    description?: StringFieldUpdateOperationsInput | undefined;
    caption?: StringFieldUpdateOperationsInput | undefined;
    url?: StringFieldUpdateOperationsInput | undefined;
    productIds?: ArtworkUpdateproductIdsInput | undefined;
    Inventory?: InventoryUpdateOneRequiredWithoutArtworkInput | undefined;
    OrderLineItems?: OrderLineItemUpdateManyWithoutSelectedArtworkInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
