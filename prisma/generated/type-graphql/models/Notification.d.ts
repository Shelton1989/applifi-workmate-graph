import { User } from "../models/User";
export declare class Notification {
    id: string;
    description: string;
    User?: User | null;
    userId?: string | null;
    Actor?: User | null;
    actorId?: string | null;
    entityId?: string | null;
    hasBeenViewedBySubject: boolean;
    createdAt: Date;
    updatedAt: Date;
}
