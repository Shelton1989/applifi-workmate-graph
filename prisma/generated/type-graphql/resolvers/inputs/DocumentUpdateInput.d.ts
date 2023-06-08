import { CommentUpdateManyWithoutDocumentInput } from "../inputs/CommentUpdateManyWithoutDocumentInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumDOCUMENT_INDEX_STATUSFieldUpdateOperationsInput } from "../inputs/EnumDOCUMENT_INDEX_STATUSFieldUpdateOperationsInput";
import { EnumPUBLISH_STATUSFieldUpdateOperationsInput } from "../inputs/EnumPUBLISH_STATUSFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TenantUpdateOneRequiredWithoutDocumentsInput } from "../inputs/TenantUpdateOneRequiredWithoutDocumentsInput";
import { UserUpdateOneWithoutCreatedDocumentsInput } from "../inputs/UserUpdateOneWithoutCreatedDocumentsInput";
export declare class DocumentUpdateInput {
    publishStatus?: EnumPUBLISH_STATUSFieldUpdateOperationsInput | undefined;
    indexStatus?: EnumDOCUMENT_INDEX_STATUSFieldUpdateOperationsInput | undefined;
    title?: StringFieldUpdateOperationsInput | undefined;
    link?: NullableStringFieldUpdateOperationsInput | undefined;
    url?: NullableStringFieldUpdateOperationsInput | undefined;
    source?: NullableStringFieldUpdateOperationsInput | undefined;
    shortDescription?: NullableStringFieldUpdateOperationsInput | undefined;
    documentType?: NullableStringFieldUpdateOperationsInput | undefined;
    Tenant?: TenantUpdateOneRequiredWithoutDocumentsInput | undefined;
    Comments?: CommentUpdateManyWithoutDocumentInput | undefined;
    CreatedBy?: UserUpdateOneWithoutCreatedDocumentsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
