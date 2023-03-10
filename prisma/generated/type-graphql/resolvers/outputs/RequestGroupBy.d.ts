import { RequestCountAggregate } from "../outputs/RequestCountAggregate";
import { RequestMaxAggregate } from "../outputs/RequestMaxAggregate";
import { RequestMinAggregate } from "../outputs/RequestMinAggregate";
export declare class RequestGroupBy {
    id: string;
    reporterName: string | null;
    reporterEmail: string | null;
    subject: string | null;
    message: string | null;
    type: "POST_REVIEW" | "COMMENT_REVIEW" | "PROFILE_REVIEW" | "HIGHER_ACCESS" | "HELP_REQUEST";
    socialLinks: string[] | null;
    entityId: string | null;
    requestResolution: "OPEN" | "CLOSED" | "CLOSED_WITH_PREJUDICE" | "RESOLVED";
    userId: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: RequestCountAggregate | null;
    _min: RequestMinAggregate | null;
    _max: RequestMaxAggregate | null;
}
