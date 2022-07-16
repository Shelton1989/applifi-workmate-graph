import { RequestCreatesocialLinksInput } from "../inputs/RequestCreatesocialLinksInput";
import { UserCreateNestedOneWithoutRequestsInput } from "../inputs/UserCreateNestedOneWithoutRequestsInput";
export declare class RequestCreateInput {
    id?: string | undefined;
    reporterName?: string | undefined;
    reporterEmail?: string | undefined;
    subject?: string | undefined;
    message?: string | undefined;
    type: "CASH_WITHDRAWAL" | "POST_REVIEW" | "COMMENT_REVIEW" | "PROFILE_REVIEW" | "ARTIST_ACCESS" | "HELP_REQUEST";
    socialLinks?: RequestCreatesocialLinksInput | undefined;
    entityId?: string | undefined;
    requestResolution?: "OPEN" | "CLOSED" | "CLOSED_WITH_PREJUDICE" | "RESOLVED" | undefined;
    Reporter?: UserCreateNestedOneWithoutRequestsInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
