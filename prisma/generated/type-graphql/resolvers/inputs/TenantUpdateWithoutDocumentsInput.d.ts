import { BillingUpdateOneWithoutTenantInput } from "../inputs/BillingUpdateOneWithoutTenantInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { LLMQueryUpdateManyWithoutTenantInput } from "../inputs/LLMQueryUpdateManyWithoutTenantInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TenantUpdateacceptedUserEmailDomainsInput } from "../inputs/TenantUpdateacceptedUserEmailDomainsInput";
import { UserUpdateManyWithoutTenantInput } from "../inputs/UserUpdateManyWithoutTenantInput";
export declare class TenantUpdateWithoutDocumentsInput {
    name?: StringFieldUpdateOperationsInput | undefined;
    slug?: StringFieldUpdateOperationsInput | undefined;
    description?: NullableStringFieldUpdateOperationsInput | undefined;
    logoImage?: NullableStringFieldUpdateOperationsInput | undefined;
    avatar?: NullableStringFieldUpdateOperationsInput | undefined;
    Users?: UserUpdateManyWithoutTenantInput | undefined;
    Queries?: LLMQueryUpdateManyWithoutTenantInput | undefined;
    Billing?: BillingUpdateOneWithoutTenantInput | undefined;
    acceptedUserEmailDomains?: TenantUpdateacceptedUserEmailDomainsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
