import { AddressUpdateOneWithoutOrdersInput } from "../inputs/AddressUpdateOneWithoutOrdersInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { EnumORDER_STATUSFieldUpdateOperationsInput } from "../inputs/EnumORDER_STATUSFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { OrderLineItemUpdateManyWithoutOrderInput } from "../inputs/OrderLineItemUpdateManyWithoutOrderInput";
import { ShippingMethodUpdateOneWithoutOrdersInput } from "../inputs/ShippingMethodUpdateOneWithoutOrdersInput";
import { UserUpdateOneRequiredWithoutMyOrdersInput } from "../inputs/UserUpdateOneRequiredWithoutMyOrdersInput";
import { UserUpdateOneRequiredWithoutPurchaseOrdersInput } from "../inputs/UserUpdateOneRequiredWithoutPurchaseOrdersInput";
export declare class OrderUpdateInput {
    status?: EnumORDER_STATUSFieldUpdateOperationsInput | undefined;
    SelectedShippingAddress?: AddressUpdateOneWithoutOrdersInput | undefined;
    SelectedShippingMethod?: ShippingMethodUpdateOneWithoutOrdersInput | undefined;
    SelectedPaymentType?: NullableStringFieldUpdateOperationsInput | undefined;
    stripePaymentReference?: NullableStringFieldUpdateOperationsInput | undefined;
    Buyer?: UserUpdateOneRequiredWithoutMyOrdersInput | undefined;
    Seller?: UserUpdateOneRequiredWithoutPurchaseOrdersInput | undefined;
    Items?: OrderLineItemUpdateManyWithoutOrderInput | undefined;
    createdAt?: DateTimeFieldUpdateOperationsInput | undefined;
    updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;
}
