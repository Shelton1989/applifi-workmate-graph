import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class RequestOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    subject?: "asc" | "desc" | undefined;
    message?: "asc" | "desc" | undefined;
    type?: "asc" | "desc" | undefined;
    socialLinks?: "asc" | "desc" | undefined;
    entityId?: "asc" | "desc" | undefined;
    requestResolution?: "asc" | "desc" | undefined;
    Reporter?: UserOrderByWithRelationInput | undefined;
    userId?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
}
