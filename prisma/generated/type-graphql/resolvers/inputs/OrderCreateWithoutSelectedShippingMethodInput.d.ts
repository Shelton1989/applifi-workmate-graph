import { AddressCreateNestedOneWithoutOrdersInput } from "../inputs/AddressCreateNestedOneWithoutOrdersInput";
import { OrderLineItemCreateNestedManyWithoutOrderInput } from "../inputs/OrderLineItemCreateNestedManyWithoutOrderInput";
import { UserCreateNestedOneWithoutMyOrdersInput } from "../inputs/UserCreateNestedOneWithoutMyOrdersInput";
import { UserCreateNestedOneWithoutPurchaseOrdersInput } from "../inputs/UserCreateNestedOneWithoutPurchaseOrdersInput";
export declare class OrderCreateWithoutSelectedShippingMethodInput {
    id?: string | undefined;
    status?: "OPEN" | "ORDERED" | "ORDERED_PENDING_PAYMENT" | "STARTED" | "IN_PROGRESS" | "CUSTOMISED" | "READY_FOR_COLLECTION" | "READY_FOR_DELIVERY" | "SHIPPED" | "IN_DELIVERY" | "DELIVERED" | "COMPLETE" | undefined;
    SelectedShippingAddress?: AddressCreateNestedOneWithoutOrdersInput | undefined;
    SelectedPaymentType?: string | undefined;
    stripePaymentReference?: string | undefined;
    Buyer: UserCreateNestedOneWithoutMyOrdersInput;
    Seller: UserCreateNestedOneWithoutPurchaseOrdersInput;
    Items?: OrderLineItemCreateNestedManyWithoutOrderInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
