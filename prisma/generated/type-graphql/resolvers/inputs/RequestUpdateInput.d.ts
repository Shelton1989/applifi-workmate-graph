import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumREQUEST_STATUSFieldUpdateOperationsInput } from "../inputs/EnumREQUEST_STATUSFieldUpdateOperationsInput";
import { EnumREQUEST_TYPEFieldUpdateOperationsInput } from "../inputs/EnumREQUEST_TYPEFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { RequestUpdatesocialLinksInput } from "../inputs/RequestUpdatesocialLinksInput";
import { UserUpdateOneWithoutRequestsInput } from "../inputs/UserUpdateOneWithoutRequestsInput";
export declare class RequestUpdateInput {
    reporterName?: NullableStringFieldUpdateOperationsInput | undefined;
    reporterEmail?: NullableStringFieldUpdateOperationsInput | undefined;
    subject?: NullableStringFieldUpdateOperationsInput | undefined;
    message?: NullableStringFieldUpdateOperationsInput | undefined;
    type?: EnumREQUEST_TYPEFieldUpdateOperationsInput | undefined;
    socialLinks?: RequestUpdatesocialLinksInput | undefined;
    entityId?: NullableStringFieldUpdateOperationsInput | undefined;
    requestResolution?: EnumREQUEST_STATUSFieldUpdateOperationsInput | undefined;
    Reporter?: UserUpdateOneWithoutRequestsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
