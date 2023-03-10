import { User } from "../models/User";
export declare class NotificationSettings {
    id: string;
    newMenuItems: boolean;
    orderUpdates: boolean;
    newRequests: boolean;
    requestUpdates: boolean;
    commentsOnMyReviews: boolean;
    repliesToMyReviews: boolean;
    User?: User | null;
    userId?: string | null;
    createdAt: Date;
    updatedAt: Date;
}
