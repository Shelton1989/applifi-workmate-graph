import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MealUpdateOneRequiredWithoutAvailabilityInput } from "../inputs/MealUpdateOneRequiredWithoutAvailabilityInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
export declare class MealAvailabilityUpdateInput {
    Meal?: MealUpdateOneRequiredWithoutAvailabilityInput | undefined;
    startDate?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    endDate?: NullableDateTimeFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
