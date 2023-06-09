import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumBILLING_STATUSFieldUpdateOperationsInput } from "../inputs/EnumBILLING_STATUSFieldUpdateOperationsInput";
import { EnumPLANFieldUpdateOperationsInput } from "../inputs/EnumPLANFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
export declare class BillingUpdateManyMutationInput {
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | undefined;
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | undefined;
    plan?: EnumPLANFieldUpdateOperationsInput | undefined;
    status?: EnumBILLING_STATUSFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
