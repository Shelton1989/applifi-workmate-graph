import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TenantUpdateacceptedUserEmailDomainsInput } from "../inputs/TenantUpdateacceptedUserEmailDomainsInput";
import { TenantUpdateexperienceImagesInput } from "../inputs/TenantUpdateexperienceImagesInput";
export declare class TenantUpdateManyMutationInput {
    name?: StringFieldUpdateOperationsInput | undefined;
    slug?: StringFieldUpdateOperationsInput | undefined;
    description?: NullableStringFieldUpdateOperationsInput | undefined;
    logoImage?: NullableStringFieldUpdateOperationsInput | undefined;
    avatar?: NullableStringFieldUpdateOperationsInput | undefined;
    coverImage?: NullableStringFieldUpdateOperationsInput | undefined;
    experienceImages?: TenantUpdateexperienceImagesInput | undefined;
    acceptedUserEmailDomains?: TenantUpdateacceptedUserEmailDomainsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
