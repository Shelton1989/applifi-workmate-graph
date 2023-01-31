import { BookingOrderUpdateManyWithoutTenantInput } from "../inputs/BookingOrderUpdateManyWithoutTenantInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ExperienceUpdateManyWithoutTenantInput } from "../inputs/ExperienceUpdateManyWithoutTenantInput";
import { LocationUpdateManyWithoutTenantInput } from "../inputs/LocationUpdateManyWithoutTenantInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TenantUpdateexperienceImagesInput } from "../inputs/TenantUpdateexperienceImagesInput";
export declare class TenantUpdateWithoutUsersInput {
    name?: StringFieldUpdateOperationsInput | undefined;
    slug?: StringFieldUpdateOperationsInput | undefined;
    description?: NullableStringFieldUpdateOperationsInput | undefined;
    logoImage?: NullableStringFieldUpdateOperationsInput | undefined;
    avatar?: NullableStringFieldUpdateOperationsInput | undefined;
    coverImage?: NullableStringFieldUpdateOperationsInput | undefined;
    experienceImages?: TenantUpdateexperienceImagesInput | undefined;
    Experiences?: ExperienceUpdateManyWithoutTenantInput | undefined;
    BookingOrders?: BookingOrderUpdateManyWithoutTenantInput | undefined;
    Locations?: LocationUpdateManyWithoutTenantInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
