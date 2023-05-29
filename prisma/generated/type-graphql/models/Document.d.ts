import { Comment } from "../models/Comment";
import { Tenant } from "../models/Tenant";
import { DocumentCount } from "../resolvers/outputs/DocumentCount";
export declare class Document {
    id: string;
    publishStatus: "DRAFT" | "PUBLISHED" | "UNPUBLISHED" | "UNDER_REVIEW" | "PENDING_APPROVAL" | "IN_REVIEW" | "APPROVED" | "NO_ACTION_TAKEN" | "REJECTED_WITH_REASON" | "DECLINED" | "BANNED" | "SOFT_BANNED";
    title: string;
    shortDescription: string;
    Tenant?: Tenant;
    tenantId: string;
    Comments?: Comment[];
    createdAt: Date;
    updatedAt: Date;
    _count?: DocumentCount | null;
}
