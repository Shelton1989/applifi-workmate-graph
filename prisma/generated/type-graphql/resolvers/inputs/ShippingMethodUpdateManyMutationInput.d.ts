import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ShippingMethodUpdateManyMutationInput {
    name?: StringFieldUpdateOperationsInput | undefined;
    description?: StringFieldUpdateOperationsInput | undefined;
    label?: StringFieldUpdateOperationsInput | undefined;
    arrivalTimeInBusinessDays?: IntFieldUpdateOperationsInput | undefined;
    arrivalTimeInBusinessDaysRang?: StringFieldUpdateOperationsInput | undefined;
    arrivalTimeDescription?: StringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
