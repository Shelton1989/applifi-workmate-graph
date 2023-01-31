import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { ExperienceUpdateOneWithoutLocationsInput } from "../inputs/ExperienceUpdateOneWithoutLocationsInput";
import { NullableEnumADDRESS_TYPEFieldUpdateOperationsInput } from "../inputs/NullableEnumADDRESS_TYPEFieldUpdateOperationsInput";
import { NullableFloatFieldUpdateOperationsInput } from "../inputs/NullableFloatFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { TenantUpdateOneWithoutLocationsInput } from "../inputs/TenantUpdateOneWithoutLocationsInput";
export declare class LocationUpdateInput {
    description?: NullableStringFieldUpdateOperationsInput | undefined;
    longitude?: NullableFloatFieldUpdateOperationsInput | undefined;
    latitude?: NullableFloatFieldUpdateOperationsInput | undefined;
    googleMapsUrl?: NullableStringFieldUpdateOperationsInput | undefined;
    googlePlacesId?: NullableStringFieldUpdateOperationsInput | undefined;
    type?: NullableEnumADDRESS_TYPEFieldUpdateOperationsInput | undefined;
    line1?: NullableStringFieldUpdateOperationsInput | undefined;
    line2?: NullableStringFieldUpdateOperationsInput | undefined;
    city?: NullableStringFieldUpdateOperationsInput | undefined;
    district?: NullableStringFieldUpdateOperationsInput | undefined;
    country?: NullableStringFieldUpdateOperationsInput | undefined;
    code?: NullableStringFieldUpdateOperationsInput | undefined;
    isDefault?: BoolFieldUpdateOperationsInput | undefined;
    Experience?: ExperienceUpdateOneWithoutLocationsInput | undefined;
    Tenant?: TenantUpdateOneWithoutLocationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
