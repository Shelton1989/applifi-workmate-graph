import { ArtworkUpdateManyWithoutInventoryInput } from "../inputs/ArtworkUpdateManyWithoutInventoryInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ProductUpdateManyWithoutInventoryInput } from "../inputs/ProductUpdateManyWithoutInventoryInput";
import { UserUpdateOneRequiredWithoutInventoryInput } from "../inputs/UserUpdateOneRequiredWithoutInventoryInput";
export declare class InventoryUpdateInput {
    Products?: ProductUpdateManyWithoutInventoryInput | undefined;
    Artwork?: ArtworkUpdateManyWithoutInventoryInput | undefined;
    User?: UserUpdateOneRequiredWithoutInventoryInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
