import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneWithoutActivityInput } from "../inputs/UserUpdateOneWithoutActivityInput";
export declare class NotificationUpdateWithoutUserInput {
    description?: StringFieldUpdateOperationsInput | undefined;
    Actor?: UserUpdateOneWithoutActivityInput | undefined;
    entityId?: NullableStringFieldUpdateOperationsInput | undefined;
    hasBeenViewedBySubject?: BoolFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
