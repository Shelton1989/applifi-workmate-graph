export declare class OrderMinAggregate {
    id: string | null;
    mealId: string | null;
    status: "OPEN" | "ORDERED" | "IN_PREPARATION" | "READY_FOR_COLLECTION" | "IN_TRANSIT" | "ARRIVED" | "COMPLETE" | "CANCELLED" | null;
    patientId: string | null;
    tenantId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
}
