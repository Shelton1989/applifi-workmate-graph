import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumADDRESS_TYPEFieldUpdateOperationsInput } from "../inputs/EnumADDRESS_TYPEFieldUpdateOperationsInput";
import { ExperienceUpdateOneWithoutLocationsInput } from "../inputs/ExperienceUpdateOneWithoutLocationsInput";
import { FloatFieldUpdateOperationsInput } from "../inputs/FloatFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class LocationUpdateWithoutTenantInput {
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
    Experience?: ExperienceUpdateOneWithoutLocationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
