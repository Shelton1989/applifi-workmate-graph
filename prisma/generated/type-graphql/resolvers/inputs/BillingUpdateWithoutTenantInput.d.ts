import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumBILLING_STATUSFieldUpdateOperationsInput } from "../inputs/EnumBILLING_STATUSFieldUpdateOperationsInput";
import { EnumPLANFieldUpdateOperationsInput } from "../inputs/EnumPLANFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ProductKeyUpdateOneWithoutBillingInput } from "../inputs/ProductKeyUpdateOneWithoutBillingInput";
export declare class BillingUpdateWithoutTenantInput {
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | undefined;
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | undefined;
    plan?: EnumPLANFieldUpdateOperationsInput | undefined;
    status?: EnumBILLING_STATUSFieldUpdateOperationsInput | undefined;
    ProductKey?: ProductKeyUpdateOneWithoutBillingInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
