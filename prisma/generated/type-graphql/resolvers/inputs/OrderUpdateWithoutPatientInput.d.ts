import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumORDER_STATUSFieldUpdateOperationsInput } from "../inputs/EnumORDER_STATUSFieldUpdateOperationsInput";
import { MealUpdateOneRequiredWithoutOrdersInput } from "../inputs/MealUpdateOneRequiredWithoutOrdersInput";
import { OrderLineItemUpdateManyWithoutOrderInput } from "../inputs/OrderLineItemUpdateManyWithoutOrderInput";
import { TenantUpdateOneRequiredWithoutOrdersInput } from "../inputs/TenantUpdateOneRequiredWithoutOrdersInput";
export declare class OrderUpdateWithoutPatientInput {
    Meal?: MealUpdateOneRequiredWithoutOrdersInput | undefined;
    status?: EnumORDER_STATUSFieldUpdateOperationsInput | undefined;
    Tenant?: TenantUpdateOneRequiredWithoutOrdersInput | undefined;
    Items?: OrderLineItemUpdateManyWithoutOrderInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
