import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumAVAILABILITY_TYPEFieldUpdateOperationsInput } from "../inputs/EnumAVAILABILITY_TYPEFieldUpdateOperationsInput";
import { ExperienceUpdateOneRequiredWithoutAvailabilityInput } from "../inputs/ExperienceUpdateOneRequiredWithoutAvailabilityInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
export declare class ExperienceAvailabilityUpdateInput {
    Experience?: ExperienceUpdateOneRequiredWithoutAvailabilityInput | undefined;
    startDate?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    endDate?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    availabilityType?: EnumAVAILABILITY_TYPEFieldUpdateOperationsInput | undefined;
    spacesAvailable?: IntFieldUpdateOperationsInput | undefined;
    spacesBooked?: IntFieldUpdateOperationsInput | undefined;
    datesAreFlexible?: BoolFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
