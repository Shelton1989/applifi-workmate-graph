import { RequestCreatesocialLinksInput } from "../inputs/RequestCreatesocialLinksInput";
export declare class RequestCreateWithoutReporterInput {
    id?: string | undefined;
    reporterName?: string | undefined;
    reporterEmail?: string | undefined;
    subject?: string | undefined;
    message?: string | undefined;
    type: "POST_REVIEW" | "COMMENT_REVIEW" | "PROFILE_REVIEW" | "HIGHER_ACCESS" | "HELP_REQUEST";
    socialLinks?: RequestCreatesocialLinksInput | undefined;
    entityId?: string | undefined;
    requestResolution?: "OPEN" | "CLOSED" | "CLOSED_WITH_PREJUDICE" | "RESOLVED" | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
