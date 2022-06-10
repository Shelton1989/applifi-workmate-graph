import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumSIZE_REGIONFieldUpdateOperationsInput } from "../inputs/EnumSIZE_REGIONFieldUpdateOperationsInput";
import { ProductUpdateManyWithoutSizesInput } from "../inputs/ProductUpdateManyWithoutSizesInput";
import { SizeUpdateproductIdsInput } from "../inputs/SizeUpdateproductIdsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class SizeUpdateWithoutOrderLineItemsInput {
    value?: StringFieldUpdateOperationsInput | undefined;
    region?: EnumSIZE_REGIONFieldUpdateOperationsInput | undefined;
    Products?: ProductUpdateManyWithoutSizesInput | undefined;
    productIds?: SizeUpdateproductIdsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
