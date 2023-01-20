import { AggregateRatingUpdateOneWithoutExperienceInput } from "../inputs/AggregateRatingUpdateOneWithoutExperienceInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumPUBLISH_STATUSFieldUpdateOperationsInput } from "../inputs/EnumPUBLISH_STATUSFieldUpdateOperationsInput";
import { ExperienceAvailabilityUpdateManyWithoutExperienceInput } from "../inputs/ExperienceAvailabilityUpdateManyWithoutExperienceInput";
import { ExperienceUpdategalleryInput } from "../inputs/ExperienceUpdategalleryInput";
import { ExperienceUpdatelikedByIdsInput } from "../inputs/ExperienceUpdatelikedByIdsInput";
import { LocationUpdateManyWithoutExperienceInput } from "../inputs/LocationUpdateManyWithoutExperienceInput";
import { NullableEnumEXPERIENCE_CATEGORYFieldUpdateOperationsInput } from "../inputs/NullableEnumEXPERIENCE_CATEGORYFieldUpdateOperationsInput";
import { NullableIntFieldUpdateOperationsInput } from "../inputs/NullableIntFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { PostUpdateManyWithoutExperienceInput } from "../inputs/PostUpdateManyWithoutExperienceInput";
import { PriceUpdateManyWithoutExperienceInput } from "../inputs/PriceUpdateManyWithoutExperienceInput";
import { UserUpdateManyWithoutLikedExperiencesInput } from "../inputs/UserUpdateManyWithoutLikedExperiencesInput";
export declare class ExperienceUpdateWithoutTenantInput {
    productLink?: NullableStringFieldUpdateOperationsInput | undefined;
    stripeProductId?: NullableStringFieldUpdateOperationsInput | undefined;
    title?: NullableStringFieldUpdateOperationsInput | undefined;
    description?: NullableStringFieldUpdateOperationsInput | undefined;
    category?: NullableEnumEXPERIENCE_CATEGORYFieldUpdateOperationsInput | undefined;
    Availability?: ExperienceAvailabilityUpdateManyWithoutExperienceInput | undefined;
    photo?: NullableStringFieldUpdateOperationsInput | undefined;
    gallery?: ExperienceUpdategalleryInput | undefined;
    duration?: NullableIntFieldUpdateOperationsInput | undefined;
    AggregateRating?: AggregateRatingUpdateOneWithoutExperienceInput | undefined;
    publishStatus?: EnumPUBLISH_STATUSFieldUpdateOperationsInput | undefined;
    LikedBy?: UserUpdateManyWithoutLikedExperiencesInput | undefined;
    likedByIds?: ExperienceUpdatelikedByIdsInput | undefined;
    Locations?: LocationUpdateManyWithoutExperienceInput | undefined;
    Price?: PriceUpdateManyWithoutExperienceInput | undefined;
    Posts?: PostUpdateManyWithoutExperienceInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
