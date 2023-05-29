import { DocumentCountAggregate } from "../outputs/DocumentCountAggregate";
import { DocumentMaxAggregate } from "../outputs/DocumentMaxAggregate";
import { DocumentMinAggregate } from "../outputs/DocumentMinAggregate";
export declare class DocumentGroupBy {
    id: string;
    publishStatus: "DRAFT" | "PUBLISHED" | "UNPUBLISHED" | "UNDER_REVIEW" | "PENDING_APPROVAL" | "IN_REVIEW" | "APPROVED" | "NO_ACTION_TAKEN" | "REJECTED_WITH_REASON" | "DECLINED" | "BANNED" | "SOFT_BANNED";
    title: string;
    shortDescription: string;
    tenantId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: DocumentCountAggregate | null;
    _min: DocumentMinAggregate | null;
    _max: DocumentMaxAggregate | null;
}
