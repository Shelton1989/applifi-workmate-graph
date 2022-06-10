import { BrandProductUpdateManyWithoutBrandInput } from "../inputs/BrandProductUpdateManyWithoutBrandInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumSTATUSFieldUpdateOperationsInput } from "../inputs/EnumSTATUSFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class BrandUpdateInput {
    name?: StringFieldUpdateOperationsInput | undefined;
    description?: StringFieldUpdateOperationsInput | undefined;
    tagline?: StringFieldUpdateOperationsInput | undefined;
    BrandProducts?: BrandProductUpdateManyWithoutBrandInput | undefined;
    status?: EnumSTATUSFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
