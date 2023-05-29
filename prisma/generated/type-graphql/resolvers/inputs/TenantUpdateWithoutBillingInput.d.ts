import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { DocumentUpdateManyWithoutTenantInput } from "../inputs/DocumentUpdateManyWithoutTenantInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { QueryUpdateManyWithoutTenantInput } from "../inputs/QueryUpdateManyWithoutTenantInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TenantUpdateacceptedUserEmailDomainsInput } from "../inputs/TenantUpdateacceptedUserEmailDomainsInput";
import { UserUpdateManyWithoutTenantInput } from "../inputs/UserUpdateManyWithoutTenantInput";
export declare class TenantUpdateWithoutBillingInput {
    name?: StringFieldUpdateOperationsInput | undefined;
    slug?: StringFieldUpdateOperationsInput | undefined;
    description?: NullableStringFieldUpdateOperationsInput | undefined;
    logoImage?: NullableStringFieldUpdateOperationsInput | undefined;
    avatar?: NullableStringFieldUpdateOperationsInput | undefined;
    Users?: UserUpdateManyWithoutTenantInput | undefined;
    Queries?: QueryUpdateManyWithoutTenantInput | undefined;
    Documents?: DocumentUpdateManyWithoutTenantInput | undefined;
    acceptedUserEmailDomains?: TenantUpdateacceptedUserEmailDomainsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
