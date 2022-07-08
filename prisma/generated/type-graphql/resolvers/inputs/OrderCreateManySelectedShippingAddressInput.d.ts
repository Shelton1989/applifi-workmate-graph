export declare class OrderCreateManySelectedShippingAddressInput {
    id?: string | undefined;
    status?: "OPEN" | "ORDERED" | "ORDERED_PENDING_PAYMENT" | "STARTED" | "IN_PROGRESS" | "CUSTOMISED" | "READY_FOR_COLLECTION" | "READY_FOR_DELIVERY" | "SHIPPED" | "IN_DELIVERY" | "DELIVERED" | "COMPLETE" | undefined;
    selectedShippingMethodId?: string | undefined;
    SelectedPaymentType?: string | undefined;
    stripePaymentReference?: string | undefined;
    buyerId: string;
    sellerId: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
