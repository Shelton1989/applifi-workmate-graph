import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class NotificationSettingsOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    newContentILike?: "asc" | "desc" | undefined;
    commentsOnMyReviews?: "asc" | "desc" | undefined;
    repliesToMyComments?: "asc" | "desc" | undefined;
    repliesToThreads?: "asc" | "desc" | undefined;
    User?: UserOrderByWithRelationInput | undefined;
    userId?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
}
