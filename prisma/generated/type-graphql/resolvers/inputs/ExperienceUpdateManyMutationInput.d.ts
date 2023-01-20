import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumPUBLISH_STATUSFieldUpdateOperationsInput } from "../inputs/EnumPUBLISH_STATUSFieldUpdateOperationsInput";
import { ExperienceUpdategalleryInput } from "../inputs/ExperienceUpdategalleryInput";
import { ExperienceUpdatelikedByIdsInput } from "../inputs/ExperienceUpdatelikedByIdsInput";
import { NullableEnumEXPERIENCE_CATEGORYFieldUpdateOperationsInput } from "../inputs/NullableEnumEXPERIENCE_CATEGORYFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
export declare class ExperienceUpdateManyMutationInput {
    productLink?: NullableStringFieldUpdateOperationsInput | undefined;
    stripeProductId?: NullableStringFieldUpdateOperationsInput | undefined;
    title?: NullableStringFieldUpdateOperationsInput | undefined;
    description?: NullableStringFieldUpdateOperationsInput | undefined;
    category?: NullableEnumEXPERIENCE_CATEGORYFieldUpdateOperationsInput | undefined;
    photo?: NullableStringFieldUpdateOperationsInput | undefined;
    gallery?: ExperienceUpdategalleryInput | undefined;
    duration?: NullableIntFieldUpdateOperationsInput | undefined;
    publishStatus?: EnumPUBLISH_STATUSFieldUpdateOperationsInput | undefined;
    likedByIds?: ExperienceUpdatelikedByIdsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
