import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MealItemOptionUpdateOneWithoutOrderLineItemsInput } from "../inputs/MealItemOptionUpdateOneWithoutOrderLineItemsInput";
import { MealItemUpdateOneWithoutOrderLineItemsInput } from "../inputs/MealItemUpdateOneWithoutOrderLineItemsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { OrderUpdateOneRequiredWithoutItemsInput } from "../inputs/OrderUpdateOneRequiredWithoutItemsInput";
export declare class OrderLineItemUpdateInput {
    details?: NullableStringFieldUpdateOperationsInput | undefined;
    comments?: NullableStringFieldUpdateOperationsInput | undefined;
    selectedMealItem?: MealItemUpdateOneWithoutOrderLineItemsInput | undefined;
    selectedMealItemOption?: MealItemOptionUpdateOneWithoutOrderLineItemsInput | undefined;
    Booking?: OrderUpdateOneRequiredWithoutItemsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
