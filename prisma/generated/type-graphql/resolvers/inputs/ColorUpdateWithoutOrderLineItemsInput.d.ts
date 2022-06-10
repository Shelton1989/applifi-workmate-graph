import { ColorUpdateproductIdsInput } from "../inputs/ColorUpdateproductIdsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ProductUpdateManyWithoutColorsInput } from "../inputs/ProductUpdateManyWithoutColorsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ColorUpdateWithoutOrderLineItemsInput {
    name?: StringFieldUpdateOperationsInput | undefined;
    hex?: StringFieldUpdateOperationsInput | undefined;
    Products?: ProductUpdateManyWithoutColorsInput | undefined;
    productIds?: ColorUpdateproductIdsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
