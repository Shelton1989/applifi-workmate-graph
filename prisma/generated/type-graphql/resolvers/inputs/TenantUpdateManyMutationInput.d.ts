import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TenantUpdateexperienceImagesInput } from "../inputs/TenantUpdateexperienceImagesInput";
export declare class TenantUpdateManyMutationInput {
    name?: StringFieldUpdateOperationsInput | undefined;
    slug?: StringFieldUpdateOperationsInput | undefined;
    description?: NullableStringFieldUpdateOperationsInput | undefined;
    logoImage?: NullableStringFieldUpdateOperationsInput | undefined;
    avatar?: NullableStringFieldUpdateOperationsInput | undefined;
    coverImage?: NullableStringFieldUpdateOperationsInput | undefined;
    experienceImages?: TenantUpdateexperienceImagesInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
