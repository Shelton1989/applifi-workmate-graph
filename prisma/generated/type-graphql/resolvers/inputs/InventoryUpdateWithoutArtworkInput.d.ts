import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ProductUpdateManyWithoutInventoryInput } from "../inputs/ProductUpdateManyWithoutInventoryInput";
import { UserUpdateOneRequiredWithoutInventoryInput } from "../inputs/UserUpdateOneRequiredWithoutInventoryInput";
export declare class InventoryUpdateWithoutArtworkInput {
    Products?: ProductUpdateManyWithoutInventoryInput | undefined;
    User?: UserUpdateOneRequiredWithoutInventoryInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
