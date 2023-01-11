import { User } from "../models/User";
export declare class NotificationSettings {
    id: string;
    newArrivals: boolean;
    bookingOrOrderUpdates: boolean;
    promotions: boolean;
    saleAlerts: boolean;
    newContentILike: boolean;
    commentsOnMyReviews: boolean;
    repliesToMyComments: boolean;
    repliesToThreads: boolean;
    User?: User | null;
    userId?: string | null;
    createdAt: Date;
    updatedAt: Date;
}
