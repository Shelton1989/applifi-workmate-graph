import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { UserUpdateOneWithoutQueriesInput } from "../inputs/UserUpdateOneWithoutQueriesInput";
export declare class QueryUpdateWithoutTenantInput {
    queryLink?: NullableStringFieldUpdateOperationsInput | undefined;
    queryText?: NullableStringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    User?: UserUpdateOneWithoutQueriesInput | undefined;
}
