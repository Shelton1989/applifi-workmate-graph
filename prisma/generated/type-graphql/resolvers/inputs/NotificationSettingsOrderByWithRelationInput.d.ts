import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class NotificationSettingsOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    newDocumentsIndexed?: "asc" | "desc" | undefined;
    documentUpdates?: "asc" | "desc" | undefined;
    newRequests?: "asc" | "desc" | undefined;
    requestUpdates?: "asc" | "desc" | undefined;
    commentsOnMyReviews?: "asc" | "desc" | undefined;
    repliesToMyReviews?: "asc" | "desc" | undefined;
    User?: UserOrderByWithRelationInput | undefined;
    userId?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
}
