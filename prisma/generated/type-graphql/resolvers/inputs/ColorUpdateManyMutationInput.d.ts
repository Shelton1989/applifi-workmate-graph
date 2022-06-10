import { ColorUpdateproductIdsInput } from "../inputs/ColorUpdateproductIdsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ColorUpdateManyMutationInput {
    name?: StringFieldUpdateOperationsInput | undefined;
    hex?: StringFieldUpdateOperationsInput | undefined;
    productIds?: ColorUpdateproductIdsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
