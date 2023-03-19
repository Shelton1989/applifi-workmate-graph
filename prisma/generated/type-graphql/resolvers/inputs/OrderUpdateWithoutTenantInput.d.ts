import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumORDER_STATUSFieldUpdateOperationsInput } from "../inputs/EnumORDER_STATUSFieldUpdateOperationsInput";
import { MealUpdateOneRequiredWithoutOrdersInput } from "../inputs/MealUpdateOneRequiredWithoutOrdersInput";
import { OrderLineItemUpdateManyWithoutOrderInput } from "../inputs/OrderLineItemUpdateManyWithoutOrderInput";
import { UserUpdateOneRequiredWithoutBookingsInput } from "../inputs/UserUpdateOneRequiredWithoutBookingsInput";
export declare class OrderUpdateWithoutTenantInput {
    Meal?: MealUpdateOneRequiredWithoutOrdersInput | undefined;
    status?: EnumORDER_STATUSFieldUpdateOperationsInput | undefined;
    Patient?: UserUpdateOneRequiredWithoutBookingsInput | undefined;
    Items?: OrderLineItemUpdateManyWithoutOrderInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
