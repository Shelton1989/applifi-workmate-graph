export declare class RequestMinAggregate {
    id: string | null;
    reporterName: string | null;
    reporterEmail: string | null;
    subject: string | null;
    message: string | null;
    type: "CASH_WITHDRAWAL" | "POST_REVIEW" | "COMMENT_REVIEW" | "PROFILE_REVIEW" | "ARTIST_ACCESS" | "HELP_REQUEST" | null;
    entityId: string | null;
    requestResolution: "OPEN" | "CLOSED" | "CLOSED_WITH_PREJUDICE" | "RESOLVED" | null;
    userId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
}