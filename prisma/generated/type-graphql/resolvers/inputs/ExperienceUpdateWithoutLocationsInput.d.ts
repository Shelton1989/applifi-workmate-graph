import { AggregateRatingUpdateOneWithoutExperienceInput } from "../inputs/AggregateRatingUpdateOneWithoutExperienceInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumEXPERIENCE_CATEGORYFieldUpdateOperationsInput } from "../inputs/EnumEXPERIENCE_CATEGORYFieldUpdateOperationsInput";
import { EnumPUBLISH_STATUSFieldUpdateOperationsInput } from "../inputs/EnumPUBLISH_STATUSFieldUpdateOperationsInput";
import { ExperienceAvailabilityUpdateManyWithoutExperienceInput } from "../inputs/ExperienceAvailabilityUpdateManyWithoutExperienceInput";
import { ExperienceUpdategalleryInput } from "../inputs/ExperienceUpdategalleryInput";
import { ExperienceUpdatelikedByIdsInput } from "../inputs/ExperienceUpdatelikedByIdsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PostUpdateManyWithoutExperienceInput } from "../inputs/PostUpdateManyWithoutExperienceInput";
import { PriceUpdateManyWithoutExperienceInput } from "../inputs/PriceUpdateManyWithoutExperienceInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TenantUpdateOneRequiredWithoutExperiencesInput } from "../inputs/TenantUpdateOneRequiredWithoutExperiencesInput";
import { UserUpdateManyWithoutLikedExperiencesInput } from "../inputs/UserUpdateManyWithoutLikedExperiencesInput";
export declare class ExperienceUpdateWithoutLocationsInput {
    Tenant?: TenantUpdateOneRequiredWithoutExperiencesInput | undefined;
    productLink?: NullableStringFieldUpdateOperationsInput | undefined;
    stripeProductId?: NullableStringFieldUpdateOperationsInput | undefined;
    title?: StringFieldUpdateOperationsInput | undefined;
    description?: StringFieldUpdateOperationsInput | undefined;
    category?: EnumEXPERIENCE_CATEGORYFieldUpdateOperationsInput | undefined;
    Availability?: ExperienceAvailabilityUpdateManyWithoutExperienceInput | undefined;
    photo?: NullableStringFieldUpdateOperationsInput | undefined;
    gallery?: ExperienceUpdategalleryInput | undefined;
    location?: StringFieldUpdateOperationsInput | undefined;
    duration?: IntFieldUpdateOperationsInput | undefined;
    AggregatedRating?: AggregateRatingUpdateOneWithoutExperienceInput | undefined;
    publishStatus?: EnumPUBLISH_STATUSFieldUpdateOperationsInput | undefined;
    LikedBy?: UserUpdateManyWithoutLikedExperiencesInput | undefined;
    likedByIds?: ExperienceUpdatelikedByIdsInput | undefined;
    Price?: PriceUpdateManyWithoutExperienceInput | undefined;
    Posts?: PostUpdateManyWithoutExperienceInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
