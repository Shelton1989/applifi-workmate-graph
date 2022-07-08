import { AddressCreateNestedOneWithoutOrdersInput } from "../inputs/AddressCreateNestedOneWithoutOrdersInput";
import { OrderLineItemCreateNestedManyWithoutOrderInput } from "../inputs/OrderLineItemCreateNestedManyWithoutOrderInput";
import { ShippingMethodCreateNestedOneWithoutOrdersInput } from "../inputs/ShippingMethodCreateNestedOneWithoutOrdersInput";
import { UserCreateNestedOneWithoutPurchaseOrdersInput } from "../inputs/UserCreateNestedOneWithoutPurchaseOrdersInput";
export declare class OrderCreateWithoutBuyerInput {
    id?: string | undefined;
    status?: "OPEN" | "ORDERED" | "ORDERED_PENDING_PAYMENT" | "STARTED" | "IN_PROGRESS" | "CUSTOMISED" | "READY_FOR_COLLECTION" | "READY_FOR_DELIVERY" | "SHIPPED" | "IN_DELIVERY" | "DELIVERED" | "COMPLETE" | undefined;
    SelectedShippingAddress?: AddressCreateNestedOneWithoutOrdersInput | undefined;
    SelectedShippingMethod?: ShippingMethodCreateNestedOneWithoutOrdersInput | undefined;
    SelectedPaymentType?: string | undefined;
    stripePaymentReference?: string | undefined;
    Seller: UserCreateNestedOneWithoutPurchaseOrdersInput;
    Items?: OrderLineItemCreateNestedManyWithoutOrderInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
