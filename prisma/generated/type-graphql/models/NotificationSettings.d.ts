import { User } from "../models/User";
export declare class NotificationSettings {
    id: string;
    newArrivals: boolean;
    orderUpdates: boolean;
    promotions: boolean;
    saleAlerts: boolean;
    postsByArtistsIFollow: boolean;
    postsByBrandsIFollow: boolean;
    User?: User | null;
    userId?: string | null;
    createdAt: Date;
    updatedAt: Date;
}
