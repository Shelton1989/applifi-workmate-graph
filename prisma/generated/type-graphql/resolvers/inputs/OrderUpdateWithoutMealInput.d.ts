import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumORDER_STATUSFieldUpdateOperationsInput } from "../inputs/EnumORDER_STATUSFieldUpdateOperationsInput";
import { OrderLineItemUpdateManyWithoutBookingInput } from "../inputs/OrderLineItemUpdateManyWithoutBookingInput";
import { TenantUpdateOneRequiredWithoutOrdersInput } from "../inputs/TenantUpdateOneRequiredWithoutOrdersInput";
import { UserUpdateOneRequiredWithoutBookingsInput } from "../inputs/UserUpdateOneRequiredWithoutBookingsInput";
export declare class OrderUpdateWithoutMealInput {
    status?: EnumORDER_STATUSFieldUpdateOperationsInput | undefined;
    Patient?: UserUpdateOneRequiredWithoutBookingsInput | undefined;
    Tenant?: TenantUpdateOneRequiredWithoutOrdersInput | undefined;
    Items?: OrderLineItemUpdateManyWithoutBookingInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
