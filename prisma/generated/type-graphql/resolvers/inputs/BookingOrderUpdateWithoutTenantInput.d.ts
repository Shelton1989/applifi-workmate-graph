import { BookingOrderLineItemUpdateManyWithoutBookingInput } from "../inputs/BookingOrderLineItemUpdateManyWithoutBookingInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumBOOKING_ORDER_STATUSFieldUpdateOperationsInput } from "../inputs/EnumBOOKING_ORDER_STATUSFieldUpdateOperationsInput";
import { EnumPAYMENT_STATUSFieldUpdateOperationsInput } from "../inputs/EnumPAYMENT_STATUSFieldUpdateOperationsInput";
import { ExperienceUpdateOneRequiredWithoutBookingsInput } from "../inputs/ExperienceUpdateOneRequiredWithoutBookingsInput";
import { TransactionUpdateManyWithoutBookingOrderInput } from "../inputs/TransactionUpdateManyWithoutBookingOrderInput";
import { UserUpdateOneRequiredWithoutBookingsInput } from "../inputs/UserUpdateOneRequiredWithoutBookingsInput";
export declare class BookingOrderUpdateWithoutTenantInput {
    Experience?: ExperienceUpdateOneRequiredWithoutBookingsInput | undefined;
    status?: EnumBOOKING_ORDER_STATUSFieldUpdateOperationsInput | undefined;
    Buyer?: UserUpdateOneRequiredWithoutBookingsInput | undefined;
    Items?: BookingOrderLineItemUpdateManyWithoutBookingInput | undefined;
    Transactions?: TransactionUpdateManyWithoutBookingOrderInput | undefined;
    PaymentStatus?: EnumPAYMENT_STATUSFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
