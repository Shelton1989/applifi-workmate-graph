import { AddressOrderByWithRelationInput } from "../inputs/AddressOrderByWithRelationInput";
import { OrderLineItemOrderByRelationAggregateInput } from "../inputs/OrderLineItemOrderByRelationAggregateInput";
import { ShippingMethodOrderByWithRelationInput } from "../inputs/ShippingMethodOrderByWithRelationInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class OrderOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    status?: "asc" | "desc" | undefined;
    SelectedShippingAddress?: AddressOrderByWithRelationInput | undefined;
    selectedShippingAddressId?: "asc" | "desc" | undefined;
    SelectedShippingMethod?: ShippingMethodOrderByWithRelationInput | undefined;
    selectedShippingMethodId?: "asc" | "desc" | undefined;
    SelectedPaymentType?: "asc" | "desc" | undefined;
    stripePaymentReference?: "asc" | "desc" | undefined;
    Buyer?: UserOrderByWithRelationInput | undefined;
    buyerId?: "asc" | "desc" | undefined;
    Seller?: UserOrderByWithRelationInput | undefined;
    sellerId?: "asc" | "desc" | undefined;
    Items?: OrderLineItemOrderByRelationAggregateInput | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
}
