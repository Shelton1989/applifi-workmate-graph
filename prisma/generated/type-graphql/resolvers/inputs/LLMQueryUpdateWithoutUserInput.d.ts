import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { TenantUpdateOneRequiredWithoutQueriesInput } from "../inputs/TenantUpdateOneRequiredWithoutQueriesInput";
export declare class LLMQueryUpdateWithoutUserInput {
    Tenant?: TenantUpdateOneRequiredWithoutQueriesInput | undefined;
    queryLink?: NullableStringFieldUpdateOperationsInput | undefined;
    question?: NullableStringFieldUpdateOperationsInput | undefined;
    response?: NullableStringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
