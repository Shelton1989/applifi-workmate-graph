import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MealItemOptionUpdateOneWithoutOrderLineItemsInput } from "../inputs/MealItemOptionUpdateOneWithoutOrderLineItemsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { OrderUpdateOneRequiredWithoutItemsInput } from "../inputs/OrderUpdateOneRequiredWithoutItemsInput";
export declare class OrderLineItemUpdateWithoutSelectedMealItemInput {
    details?: NullableStringFieldUpdateOperationsInput | undefined;
    comments?: NullableStringFieldUpdateOperationsInput | undefined;
    selectedMealItemOption?: MealItemOptionUpdateOneWithoutOrderLineItemsInput | undefined;
    Order?: OrderUpdateOneRequiredWithoutItemsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
