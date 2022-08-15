import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class NotificationUpdateManyMutationInput {
    description?: StringFieldUpdateOperationsInput | undefined;
    entityId?: NullableStringFieldUpdateOperationsInput | undefined;
    hasBeenViewedBySubject?: BoolFieldUpdateOperationsInput | undefined;
    link?: NullableStringFieldUpdateOperationsInput | undefined;
    mediaLink?: NullableStringFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
