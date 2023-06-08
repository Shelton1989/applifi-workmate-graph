import { DocumentCountAggregate } from "../outputs/DocumentCountAggregate";
import { DocumentMaxAggregate } from "../outputs/DocumentMaxAggregate";
import { DocumentMinAggregate } from "../outputs/DocumentMinAggregate";
export declare class DocumentGroupBy {
    id: string;
    publishStatus: "DRAFT" | "PUBLISHED" | "UNPUBLISHED" | "UNDER_REVIEW" | "PENDING_APPROVAL" | "IN_REVIEW" | "APPROVED" | "NO_ACTION_TAKEN" | "REJECTED_WITH_REASON" | "DECLINED" | "BANNED" | "SOFT_BANNED";
    indexStatus: "INDEXED" | "NOT_INDEXED" | "INDEXING" | "INDEXING_FAILED" | "INDEXING_FAILED_LIMIT_REACHED" | "INDEXING_FAILED_DOCUMENT_INACCESSIBLE";
    title: string;
    link: string | null;
    url: string | null;
    source: string | null;
    shortDescription: string | null;
    documentType: string | null;
    tenantId: string;
    createdByUserId: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: DocumentCountAggregate | null;
    _min: DocumentMinAggregate | null;
    _max: DocumentMaxAggregate | null;
}
