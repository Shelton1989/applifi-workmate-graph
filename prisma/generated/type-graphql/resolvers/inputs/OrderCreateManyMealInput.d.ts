export declare class OrderCreateManyMealInput {
    id?: string | undefined;
    status?: "OPEN" | "ORDERED" | "IN_PREPARATION" | "READY_FOR_COLLECTION" | "IN_TRANSIT" | "ARRIVED" | "COMPLETE" | "CANCELLED" | undefined;
    patientId: string;
    tenantId: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
