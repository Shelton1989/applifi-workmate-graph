import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumPRODUCT_CATEGORYFieldUpdateOperationsInput } from "../inputs/EnumPRODUCT_CATEGORYFieldUpdateOperationsInput";
import { EnumPRODUCT_TYPEFieldUpdateOperationsInput } from "../inputs/EnumPRODUCT_TYPEFieldUpdateOperationsInput";
import { EnumSTATUSFieldUpdateOperationsInput } from "../inputs/EnumSTATUSFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { ProductUpdateManyWithoutBaseProductInput } from "../inputs/ProductUpdateManyWithoutBaseProductInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class BrandProductUpdateWithoutBrandInput {
    name?: StringFieldUpdateOperationsInput | undefined;
    releaseYear?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    description?: StringFieldUpdateOperationsInput | undefined;
    type?: EnumPRODUCT_TYPEFieldUpdateOperationsInput | undefined;
    category?: EnumPRODUCT_CATEGORYFieldUpdateOperationsInput | undefined;
    status?: EnumSTATUSFieldUpdateOperationsInput | undefined;
    Products?: ProductUpdateManyWithoutBaseProductInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
