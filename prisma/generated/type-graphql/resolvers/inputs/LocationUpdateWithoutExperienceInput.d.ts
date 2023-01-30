import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumADDRESS_TYPEFieldUpdateOperationsInput } from "../inputs/EnumADDRESS_TYPEFieldUpdateOperationsInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TenantUpdateOneWithoutLocationsInput } from "../inputs/TenantUpdateOneWithoutLocationsInput";
export declare class LocationUpdateWithoutExperienceInput {
    description?: StringFieldUpdateOperationsInput | undefined;
    longitude?: FloatFieldUpdateOperationsInput | undefined;
    latitude?: FloatFieldUpdateOperationsInput | undefined;
    googleMapsUrl?: StringFieldUpdateOperationsInput | undefined;
    googlePlacesId?: StringFieldUpdateOperationsInput | undefined;
    type?: EnumADDRESS_TYPEFieldUpdateOperationsInput | undefined;
    line1?: StringFieldUpdateOperationsInput | undefined;
    line2?: StringFieldUpdateOperationsInput | undefined;
    city?: StringFieldUpdateOperationsInput | undefined;
    district?: StringFieldUpdateOperationsInput | undefined;
    country?: StringFieldUpdateOperationsInput | undefined;
    code?: StringFieldUpdateOperationsInput | undefined;
    isDefault?: BoolFieldUpdateOperationsInput | undefined;
    Tenant?: TenantUpdateOneWithoutLocationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
