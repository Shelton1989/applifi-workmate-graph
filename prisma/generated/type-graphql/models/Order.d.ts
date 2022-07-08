import { Address } from "../models/Address";
import { OrderLineItem } from "../models/OrderLineItem";
import { ShippingMethod } from "../models/ShippingMethod";
import { User } from "../models/User";
import { OrderCount } from "../resolvers/outputs/OrderCount";
export declare class Order {
    id: string;
    status: "OPEN" | "ORDERED" | "ORDERED_PENDING_PAYMENT" | "STARTED" | "IN_PROGRESS" | "CUSTOMISED" | "READY_FOR_COLLECTION" | "READY_FOR_DELIVERY" | "SHIPPED" | "IN_DELIVERY" | "DELIVERED" | "COMPLETE";
    SelectedShippingAddress?: Address | null;
    selectedShippingAddressId?: string | null;
    SelectedShippingMethod?: ShippingMethod | null;
    selectedShippingMethodId?: string | null;
    SelectedPaymentType?: string | null;
    stripePaymentReference?: string | null;
    Buyer?: User;
    buyerId: string;
    Seller?: User;
    sellerId: string;
    Items?: OrderLineItem[];
    createdAt: Date;
    updatedAt: Date;
    _count?: OrderCount | null;
}
