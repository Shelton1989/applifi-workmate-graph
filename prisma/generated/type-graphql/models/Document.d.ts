import { Comment } from "../models/Comment";
import { Tenant } from "../models/Tenant";
import { DocumentCount } from "../resolvers/outputs/DocumentCount";
export declare class Document {
    id: string;
    publishStatus: "DRAFT" | "PUBLISHED" | "UNPUBLISHED" | "UNDER_REVIEW" | "PENDING_APPROVAL" | "IN_REVIEW" | "APPROVED" | "NO_ACTION_TAKEN" | "REJECTED_WITH_REASON" | "DECLINED" | "BANNED" | "SOFT_BANNED";
    indexStatus: "INDEXED" | "NOT_INDEXED" | "INDEXING" | "INDEXING_FAILED" | "INDEXING_FAILED_LIMIT_REACHED" | "INDEXING_FAILED_DOCUMENT_INACCESSIBLE";
    title: string;
    link?: string | null;
    url?: string | null;
    source?: string | null;
    shortDescription?: string | null;
    documentType?: string | null;
    Tenant?: Tenant;
    tenantId: string;
    Comments?: Comment[];
    createdAt: Date;
    updatedAt: Date;
    _count?: DocumentCount | null;
}
