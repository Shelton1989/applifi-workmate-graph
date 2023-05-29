import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { TenantUpdateOneRequiredWithoutQueriesInput } from "../inputs/TenantUpdateOneRequiredWithoutQueriesInput";
import { UserUpdateOneWithoutQueriesInput } from "../inputs/UserUpdateOneWithoutQueriesInput";
export declare class QueryUpdateInput {
    Tenant?: TenantUpdateOneRequiredWithoutQueriesInput | undefined;
    queryLink?: NullableStringFieldUpdateOperationsInput | undefined;
    queryText?: NullableStringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    User?: UserUpdateOneWithoutQueriesInput | undefined;
}
