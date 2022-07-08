import { RequestCreatesocialLinksInput } from "../inputs/RequestCreatesocialLinksInput";
export declare class RequestCreateManyInput {
    id?: string | undefined;
    subject?: string | undefined;
    message?: string | undefined;
    type: "CASH_WITHDRAWAL" | "POST_REVIEW" | "COMMENT_REVIEW" | "PROFILE_REVIEW" | "ARTIST_ACCESS" | "HELP_REQUEST";
    socialLinks?: RequestCreatesocialLinksInput | undefined;
    entityId?: string | undefined;
    requestResolution?: "OPEN" | "CLOSED" | "CLOSED_WITH_PREJUDICE" | "RESOLVED" | undefined;
    userId: string;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
