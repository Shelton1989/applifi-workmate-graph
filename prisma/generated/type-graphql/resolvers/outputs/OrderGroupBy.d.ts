import { OrderCountAggregate } from "../outputs/OrderCountAggregate";
import { OrderMaxAggregate } from "../outputs/OrderMaxAggregate";
import { OrderMinAggregate } from "../outputs/OrderMinAggregate";
export declare class OrderGroupBy {
    id: string;
    status: "OPEN" | "ORDERED" | "ORDERED_PENDING_PAYMENT" | "STARTED" | "IN_PROGRESS" | "CUSTOMISED" | "READY_FOR_COLLECTION" | "READY_FOR_DELIVERY" | "SHIPPED" | "IN_DELIVERY" | "DELIVERED" | "COMPLETE";
    selectedShippingAddressId: string | null;
    selectedShippingMethodId: string | null;
    SelectedPaymentType: string | null;
    stripePaymentReference: string | null;
    buyerId: string;
    sellerId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: OrderCountAggregate | null;
    _min: OrderMinAggregate | null;
    _max: OrderMaxAggregate | null;
}
