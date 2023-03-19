import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MealItemOptionUpdateOneWithoutOrderLineItemsInput } from "../inputs/MealItemOptionUpdateOneWithoutOrderLineItemsInput";
import { MealItemUpdateOneWithoutOrderLineItemsInput } from "../inputs/MealItemUpdateOneWithoutOrderLineItemsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
export declare class OrderLineItemUpdateWithoutOrderInput {
    details?: NullableStringFieldUpdateOperationsInput | undefined;
    comments?: NullableStringFieldUpdateOperationsInput | undefined;
    selectedMealItem?: MealItemUpdateOneWithoutOrderLineItemsInput | undefined;
    selectedMealItemOption?: MealItemOptionUpdateOneWithoutOrderLineItemsInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
