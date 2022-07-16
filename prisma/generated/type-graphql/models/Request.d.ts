import { User } from "../models/User";
export declare class Request {
    id: string;
    reporterName?: string | null;
    reporterEmail?: string | null;
    subject?: string | null;
    message?: string | null;
    type: "CASH_WITHDRAWAL" | "POST_REVIEW" | "COMMENT_REVIEW" | "PROFILE_REVIEW" | "ARTIST_ACCESS" | "HELP_REQUEST";
    socialLinks: string[];
    entityId?: string | null;
    requestResolution: "OPEN" | "CLOSED" | "CLOSED_WITH_PREJUDICE" | "RESOLVED";
    Reporter?: User | null;
    userId?: string | null;
    createdAt: Date;
    updatedAt: Date;
}
