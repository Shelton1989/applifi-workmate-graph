import { BoolFieldUpdateOperationsInput } from "../inputs/BoolFieldUpdateOperationsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { UserUpdateOneWithoutNotificationsInput } from "../inputs/UserUpdateOneWithoutNotificationsInput";
export declare class NotificationUpdateWithoutActorInput {
    description?: StringFieldUpdateOperationsInput | undefined;
    User?: UserUpdateOneWithoutNotificationsInput | undefined;
    entityId?: NullableStringFieldUpdateOperationsInput | undefined;
    hasBeenViewedBySubject?: BoolFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
