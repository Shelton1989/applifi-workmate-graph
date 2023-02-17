import { BookingOrderLineItemUpdateManyWithoutBookingInput } from "../inputs/BookingOrderLineItemUpdateManyWithoutBookingInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumBOOKING_ORDER_STATUSFieldUpdateOperationsInput } from "../inputs/EnumBOOKING_ORDER_STATUSFieldUpdateOperationsInput";
import { EnumPAYMENT_STATUSFieldUpdateOperationsInput } from "../inputs/EnumPAYMENT_STATUSFieldUpdateOperationsInput";
import { ExperienceUpdateOneRequiredWithoutBookingsInput } from "../inputs/ExperienceUpdateOneRequiredWithoutBookingsInput";
import { TenantUpdateOneRequiredWithoutBookingOrdersInput } from "../inputs/TenantUpdateOneRequiredWithoutBookingOrdersInput";
import { TransactionUpdateManyWithoutBookingOrderInput } from "../inputs/TransactionUpdateManyWithoutBookingOrderInput";
export declare class BookingOrderUpdateWithoutBuyerInput {
    Experience?: ExperienceUpdateOneRequiredWithoutBookingsInput | undefined;
    status?: EnumBOOKING_ORDER_STATUSFieldUpdateOperationsInput | undefined;
    Tenant?: TenantUpdateOneRequiredWithoutBookingOrdersInput | undefined;
    Items?: BookingOrderLineItemUpdateManyWithoutBookingInput | undefined;
    Transactions?: TransactionUpdateManyWithoutBookingOrderInput | undefined;
    PaymentStatus?: EnumPAYMENT_STATUSFieldUpdateOperationsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
