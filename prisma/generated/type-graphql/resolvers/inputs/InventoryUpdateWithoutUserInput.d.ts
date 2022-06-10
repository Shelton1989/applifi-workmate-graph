import { ArtworkUpdateManyWithoutInventoryInput } from "../inputs/ArtworkUpdateManyWithoutInventoryInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ProductUpdateManyWithoutInventoryInput } from "../inputs/ProductUpdateManyWithoutInventoryInput";
export declare class InventoryUpdateWithoutUserInput {
    Products?: ProductUpdateManyWithoutInventoryInput | undefined;
    Artwork?: ArtworkUpdateManyWithoutInventoryInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
