import { CommentUpdateManyWithoutDocumentInput } from "../inputs/CommentUpdateManyWithoutDocumentInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumPUBLISH_STATUSFieldUpdateOperationsInput } from "../inputs/EnumPUBLISH_STATUSFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TenantUpdateOneRequiredWithoutDocumentsInput } from "../inputs/TenantUpdateOneRequiredWithoutDocumentsInput";
export declare class DocumentUpdateInput {
    publishStatus?: EnumPUBLISH_STATUSFieldUpdateOperationsInput | undefined;
    title?: StringFieldUpdateOperationsInput | undefined;
    shortDescription?: StringFieldUpdateOperationsInput | undefined;
    Tenant?: TenantUpdateOneRequiredWithoutDocumentsInput | undefined;
    Comments?: CommentUpdateManyWithoutDocumentInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
