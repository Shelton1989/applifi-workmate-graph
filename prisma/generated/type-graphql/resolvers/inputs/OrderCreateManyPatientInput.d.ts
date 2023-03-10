export declare class OrderCreateManyPatientInput {
    id?: string | undefined;
    mealId: string;
    status?: "OPEN" | "ORDERED" | "IN_PREPARATION" | "READY_FOR_COLLECTION" | "IN_TRANSIT" | "ARRIVED" | "COMPLETE" | "CANCELLED" | undefined;
    tenantId: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
