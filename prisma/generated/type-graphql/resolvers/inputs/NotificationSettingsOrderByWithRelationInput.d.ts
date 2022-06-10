import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class NotificationSettingsOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    newArrivals?: "asc" | "desc" | undefined;
    orderUpdates?: "asc" | "desc" | undefined;
    promotions?: "asc" | "desc" | undefined;
    saleAlerts?: "asc" | "desc" | undefined;
    postsByArtistsIFollow?: "asc" | "desc" | undefined;
    postsByBrandsIFollow?: "asc" | "desc" | undefined;
    User?: UserOrderByWithRelationInput | undefined;
    userId?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
}
