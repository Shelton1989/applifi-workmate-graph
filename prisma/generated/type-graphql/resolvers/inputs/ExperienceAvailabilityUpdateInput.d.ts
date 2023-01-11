import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumAVAILABILITY_TYPEFieldUpdateOperationsInput } from "../inputs/EnumAVAILABILITY_TYPEFieldUpdateOperationsInput";
import { ExperienceUpdateOneRequiredWithoutAvailabilityInput } from "../inputs/ExperienceUpdateOneRequiredWithoutAvailabilityInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
export declare class ExperienceAvailabilityUpdateInput {
    Experience?: ExperienceUpdateOneRequiredWithoutAvailabilityInput | undefined;
    startDate?: DateTimeFieldUpdateOperationsInput | undefined;
    endDate?: DateTimeFieldUpdateOperationsInput | undefined;
    availabilityType?: EnumAVAILABILITY_TYPEFieldUpdateOperationsInput | undefined;
    weekendSpacesAvailable?: IntFieldUpdateOperationsInput | undefined;
    dailySpacesAvailable?: IntFieldUpdateOperationsInput | undefined;
    hourlySpacesAvailable?: IntFieldUpdateOperationsInput | undefined;
    halfHourlySpacesAvailable?: IntFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
