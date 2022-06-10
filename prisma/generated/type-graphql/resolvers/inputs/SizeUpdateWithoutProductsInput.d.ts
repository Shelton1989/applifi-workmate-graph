import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumSIZE_REGIONFieldUpdateOperationsInput } from "../inputs/EnumSIZE_REGIONFieldUpdateOperationsInput";
import { OrderLineItemUpdateManyWithoutSelectedSizeInput } from "../inputs/OrderLineItemUpdateManyWithoutSelectedSizeInput";
import { SizeUpdateproductIdsInput } from "../inputs/SizeUpdateproductIdsInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
export declare class SizeUpdateWithoutProductsInput {
    value?: StringFieldUpdateOperationsInput | undefined;
    region?: EnumSIZE_REGIONFieldUpdateOperationsInput | undefined;
    productIds?: SizeUpdateproductIdsInput | undefined;
    OrderLineItems?: OrderLineItemUpdateManyWithoutSelectedSizeInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
