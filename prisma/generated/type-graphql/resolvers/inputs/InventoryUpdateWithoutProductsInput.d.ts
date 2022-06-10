import { ArtworkUpdateManyWithoutInventoryInput } from "../inputs/ArtworkUpdateManyWithoutInventoryInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutInventoryInput } from "../inputs/UserUpdateOneRequiredWithoutInventoryInput";
export declare class InventoryUpdateWithoutProductsInput {
    Artwork?: ArtworkUpdateManyWithoutInventoryInput | undefined;
    User?: UserUpdateOneRequiredWithoutInventoryInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
