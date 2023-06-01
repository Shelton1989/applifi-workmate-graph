import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { UserUpdateOneWithoutQueriesInput } from "../inputs/UserUpdateOneWithoutQueriesInput";
export declare class LLMQueryUpdateWithoutTenantInput {
    queryLink?: NullableStringFieldUpdateOperationsInput | undefined;
    question?: NullableStringFieldUpdateOperationsInput | undefined;
    response?: NullableStringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
    User?: UserUpdateOneWithoutQueriesInput | undefined;
}
