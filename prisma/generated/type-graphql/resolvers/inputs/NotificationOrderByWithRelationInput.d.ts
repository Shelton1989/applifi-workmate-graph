import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class NotificationOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    description?: "asc" | "desc" | undefined;
    User?: UserOrderByWithRelationInput | undefined;
    userId?: "asc" | "desc" | undefined;
    Actor?: UserOrderByWithRelationInput | undefined;
    actorId?: "asc" | "desc" | undefined;
    entityId?: "asc" | "desc" | undefined;
    hasBeenViewedBySubject?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
}
