import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumBOOKING_ORDER_STATUSFieldUpdateOperationsInput } from "../inputs/EnumBOOKING_ORDER_STATUSFieldUpdateOperationsInput";
import { EnumPAYMENT_STATUSFieldUpdateOperationsInput } from "../inputs/EnumPAYMENT_STATUSFieldUpdateOperationsInput";
export declare class BookingOrderUpdateManyMutationInput {
    status?: EnumBOOKING_ORDER_STATUSFieldUpdateOperationsInput | undefined;
    PaymentStatus?: EnumPAYMENT_STATUSFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
