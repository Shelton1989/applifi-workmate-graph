import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumORDER_STATUSFieldUpdateOperationsInput } from "../inputs/EnumORDER_STATUSFieldUpdateOperationsInput";
import { MealUpdateOneRequiredWithoutOrdersInput } from "../inputs/MealUpdateOneRequiredWithoutOrdersInput";
import { OrderLineItemUpdateManyWithoutBookingInput } from "../inputs/OrderLineItemUpdateManyWithoutBookingInput";
import { UserUpdateOneRequiredWithoutBookingsInput } from "../inputs/UserUpdateOneRequiredWithoutBookingsInput";
export declare class OrderUpdateWithoutTenantInput {
    Meal?: MealUpdateOneRequiredWithoutOrdersInput | undefined;
    status?: EnumORDER_STATUSFieldUpdateOperationsInput | undefined;
    Patient?: UserUpdateOneRequiredWithoutBookingsInput | undefined;
    Items?: OrderLineItemUpdateManyWithoutBookingInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
