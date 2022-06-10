import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumSIZE_REGIONFieldUpdateOperationsInput } from "../inputs/EnumSIZE_REGIONFieldUpdateOperationsInput";
import { SizeUpdateproductIdsInput } from "../inputs/SizeUpdateproductIdsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class SizeUpdateManyMutationInput {
    value?: StringFieldUpdateOperationsInput | undefined;
    region?: EnumSIZE_REGIONFieldUpdateOperationsInput | undefined;
    productIds?: SizeUpdateproductIdsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
