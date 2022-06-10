import { ColorUpdateproductIdsInput } from "../inputs/ColorUpdateproductIdsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { OrderLineItemUpdateManyWithoutSelectedColorInput } from "../inputs/OrderLineItemUpdateManyWithoutSelectedColorInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ColorUpdateWithoutProductsInput {
    name?: StringFieldUpdateOperationsInput | undefined;
    hex?: StringFieldUpdateOperationsInput | undefined;
    productIds?: ColorUpdateproductIdsInput | undefined;
    OrderLineItems?: OrderLineItemUpdateManyWithoutSelectedColorInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
