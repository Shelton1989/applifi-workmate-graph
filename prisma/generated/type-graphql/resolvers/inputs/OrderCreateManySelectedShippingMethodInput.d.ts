export declare class OrderCreateManySelectedShippingMethodInput {
    id?: string | undefined;
    status: "OPEN" | "ORDERED" | "ORDERED_PENDING_PAYMENT" | "STARTED" | "IN_PROGRESS" | "CUSTOMISED" | "READY_FOR_COLLECTION" | "READY_FOR_DELIVERY" | "SHIPPED" | "IN_DELIVERY" | "DELIVERED" | "COMPLETE";
    selectedShippingAddressId?: string | undefined;
    SelectedPaymentType?: string | undefined;
    stripePaymentReference?: string | undefined;
    userId: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
