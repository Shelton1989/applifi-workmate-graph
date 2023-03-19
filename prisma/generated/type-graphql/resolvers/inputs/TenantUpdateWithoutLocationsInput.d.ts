import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MealUpdateManyWithoutTenantInput } from "../inputs/MealUpdateManyWithoutTenantInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { OrderUpdateManyWithoutTenantInput } from "../inputs/OrderUpdateManyWithoutTenantInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TenantUpdateacceptedUserEmailDomainsInput } from "../inputs/TenantUpdateacceptedUserEmailDomainsInput";
import { TenantUpdateexperienceImagesInput } from "../inputs/TenantUpdateexperienceImagesInput";
import { UserUpdateManyWithoutTenantInput } from "../inputs/UserUpdateManyWithoutTenantInput";
export declare class TenantUpdateWithoutLocationsInput {
    name?: StringFieldUpdateOperationsInput | undefined;
    slug?: StringFieldUpdateOperationsInput | undefined;
    description?: NullableStringFieldUpdateOperationsInput | undefined;
    logoImage?: NullableStringFieldUpdateOperationsInput | undefined;
    avatar?: NullableStringFieldUpdateOperationsInput | undefined;
    coverImage?: NullableStringFieldUpdateOperationsInput | undefined;
    experienceImages?: TenantUpdateexperienceImagesInput | undefined;
    Users?: UserUpdateManyWithoutTenantInput | undefined;
    Meals?: MealUpdateManyWithoutTenantInput | undefined;
    Orders?: OrderUpdateManyWithoutTenantInput | undefined;
    acceptedUserEmailDomains?: TenantUpdateacceptedUserEmailDomainsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
