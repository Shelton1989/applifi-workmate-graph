import { ColorUpdateproductIdsInput } from "../inputs/ColorUpdateproductIdsInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { OrderLineItemUpdateManyWithoutSelectedColorInput } from "../inputs/OrderLineItemUpdateManyWithoutSelectedColorInput";
import { ProductUpdateManyWithoutColorsInput } from "../inputs/ProductUpdateManyWithoutColorsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class ColorUpdateInput {
    name?: StringFieldUpdateOperationsInput | undefined;
    hex?: StringFieldUpdateOperationsInput | undefined;
    Products?: ProductUpdateManyWithoutColorsInput | undefined;
    productIds?: ColorUpdateproductIdsInput | undefined;
    OrderLineItems?: OrderLineItemUpdateManyWithoutSelectedColorInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}