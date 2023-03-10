import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MealItemUpdateOneWithoutOrderLineItemsInput } from "../inputs/MealItemUpdateOneWithoutOrderLineItemsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { OrderUpdateOneRequiredWithoutItemsInput } from "../inputs/OrderUpdateOneRequiredWithoutItemsInput";
export declare class OrderLineItemUpdateWithoutSelectedMealItemOptionInput {
    details?: NullableStringFieldUpdateOperationsInput | undefined;
    comments?: NullableStringFieldUpdateOperationsInput | undefined;
    selectedMealItem?: MealItemUpdateOneWithoutOrderLineItemsInput | undefined;
    Booking?: OrderUpdateOneRequiredWithoutItemsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
