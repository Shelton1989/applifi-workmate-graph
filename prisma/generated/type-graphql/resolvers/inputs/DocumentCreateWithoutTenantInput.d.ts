import { CommentCreateNestedManyWithoutDocumentInput } from "../inputs/CommentCreateNestedManyWithoutDocumentInput";
export declare class DocumentCreateWithoutTenantInput {
    id?: string | undefined;
    publishStatus?: "DRAFT" | "PUBLISHED" | "UNPUBLISHED" | "UNDER_REVIEW" | "PENDING_APPROVAL" | "IN_REVIEW" | "APPROVED" | "NO_ACTION_TAKEN" | "REJECTED_WITH_REASON" | "DECLINED" | "BANNED" | "SOFT_BANNED" | undefined;
    title: string;
    shortDescription: string;
    Comments?: CommentCreateNestedManyWithoutDocumentInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
