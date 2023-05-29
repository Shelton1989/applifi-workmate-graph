import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumPUBLISH_STATUSFieldUpdateOperationsInput } from "../inputs/EnumPUBLISH_STATUSFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TenantUpdateOneRequiredWithoutDocumentsInput } from "../inputs/TenantUpdateOneRequiredWithoutDocumentsInput";
export declare class DocumentUpdateWithoutCommentsInput {
    publishStatus?: EnumPUBLISH_STATUSFieldUpdateOperationsInput | undefined;
    title?: StringFieldUpdateOperationsInput | undefined;
    shortDescription?: StringFieldUpdateOperationsInput | undefined;
    Tenant?: TenantUpdateOneRequiredWithoutDocumentsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
