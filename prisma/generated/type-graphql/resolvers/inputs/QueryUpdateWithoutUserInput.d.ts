import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { TenantUpdateOneRequiredWithoutQueriesInput } from "../inputs/TenantUpdateOneRequiredWithoutQueriesInput";
export declare class QueryUpdateWithoutUserInput {
    Tenant?: TenantUpdateOneRequiredWithoutQueriesInput | undefined;
    queryLink?: NullableStringFieldUpdateOperationsInput | undefined;
    queryText?: NullableStringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
