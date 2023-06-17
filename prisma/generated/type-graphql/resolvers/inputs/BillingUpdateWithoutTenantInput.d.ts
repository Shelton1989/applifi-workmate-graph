import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumBILLING_STATUSFieldUpdateOperationsInput } from "../inputs/EnumBILLING_STATUSFieldUpdateOperationsInput";
import { EnumPLANFieldUpdateOperationsInput } from "../inputs/EnumPLANFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ProductKeyUpdateManyWithoutBillingInput } from "../inputs/ProductKeyUpdateManyWithoutBillingInput";
export declare class BillingUpdateWithoutTenantInput {
    stripeCustomerId?: NullableStringFieldUpdateOperationsInput | undefined;
    stripeSubscriptionId?: NullableStringFieldUpdateOperationsInput | undefined;
    plan?: EnumPLANFieldUpdateOperationsInput | undefined;
    status?: EnumBILLING_STATUSFieldUpdateOperationsInput | undefined;
    ProductKeys?: ProductKeyUpdateManyWithoutBillingInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
