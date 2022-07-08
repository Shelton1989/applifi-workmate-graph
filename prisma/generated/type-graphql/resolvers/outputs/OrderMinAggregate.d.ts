export declare class OrderMinAggregate {
    id: string | null;
    status: "OPEN" | "ORDERED" | "ORDERED_PENDING_PAYMENT" | "STARTED" | "IN_PROGRESS" | "CUSTOMISED" | "READY_FOR_COLLECTION" | "READY_FOR_DELIVERY" | "SHIPPED" | "IN_DELIVERY" | "DELIVERED" | "COMPLETE" | null;
    selectedShippingAddressId: string | null;
    selectedShippingMethodId: string | null;
    SelectedPaymentType: string | null;
    stripePaymentReference: string | null;
    buyerId: string | null;
    sellerId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
}
