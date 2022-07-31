import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneWithoutActivityInput } from "../inputs/UserUpdateOneWithoutActivityInput";
import { UserUpdateOneWithoutNotificationsInput } from "../inputs/UserUpdateOneWithoutNotificationsInput";
export declare class NotificationUpdateInput {
    description?: StringFieldUpdateOperationsInput | undefined;
    User?: UserUpdateOneWithoutNotificationsInput | undefined;
    Actor?: UserUpdateOneWithoutActivityInput | undefined;
    entityId?: NullableStringFieldUpdateOperationsInput | undefined;
    hasBeenViewedBySubject?: BoolFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
