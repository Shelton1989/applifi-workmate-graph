import { AddressCreateNestedOneWithoutOrdersInput } from "../inputs/AddressCreateNestedOneWithoutOrdersInput";
import { ShippingMethodCreateNestedOneWithoutOrdersInput } from "../inputs/ShippingMethodCreateNestedOneWithoutOrdersInput";
import { UserCreateNestedOneWithoutMyOrdersInput } from "../inputs/UserCreateNestedOneWithoutMyOrdersInput";
import { UserCreateNestedOneWithoutPurchaseOrdersInput } from "../inputs/UserCreateNestedOneWithoutPurchaseOrdersInput";
export declare class OrderCreateWithoutItemsInput {
    id?: string | undefined;
    status?: "OPEN" | "ORDERED" | "ORDERED_PENDING_PAYMENT" | "STARTED" | "IN_PROGRESS" | "CUSTOMISED" | "READY_FOR_COLLECTION" | "READY_FOR_DELIVERY" | "SHIPPED" | "IN_DELIVERY" | "DELIVERED" | "COMPLETE" | undefined;
    SelectedShippingAddress?: AddressCreateNestedOneWithoutOrdersInput | undefined;
    SelectedShippingMethod?: ShippingMethodCreateNestedOneWithoutOrdersInput | undefined;
    SelectedPaymentType?: string | undefined;
    stripePaymentReference?: string | undefined;
    Buyer: UserCreateNestedOneWithoutMyOrdersInput;
    Seller: UserCreateNestedOneWithoutPurchaseOrdersInput;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
