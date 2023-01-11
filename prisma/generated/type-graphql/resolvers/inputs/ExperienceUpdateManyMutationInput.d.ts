import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumEXPERIENCE_CATEGORYFieldUpdateOperationsInput } from "../inputs/EnumEXPERIENCE_CATEGORYFieldUpdateOperationsInput";
import { EnumPUBLISH_STATUSFieldUpdateOperationsInput } from "../inputs/EnumPUBLISH_STATUSFieldUpdateOperationsInput";
import { ExperienceUpdategalleryInput } from "../inputs/ExperienceUpdategalleryInput";
import { ExperienceUpdatelikedByIdsInput } from "../inputs/ExperienceUpdatelikedByIdsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ExperienceUpdateManyMutationInput {
    productLink?: NullableStringFieldUpdateOperationsInput | undefined;
    stripeProductId?: NullableStringFieldUpdateOperationsInput | undefined;
    title?: StringFieldUpdateOperationsInput | undefined;
    description?: StringFieldUpdateOperationsInput | undefined;
    category?: EnumEXPERIENCE_CATEGORYFieldUpdateOperationsInput | undefined;
    photo?: NullableStringFieldUpdateOperationsInput | undefined;
    gallery?: ExperienceUpdategalleryInput | undefined;
    location?: StringFieldUpdateOperationsInput | undefined;
    duration?: IntFieldUpdateOperationsInput | undefined;
    publishStatus?: EnumPUBLISH_STATUSFieldUpdateOperationsInput | undefined;
    likedByIds?: ExperienceUpdatelikedByIdsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
