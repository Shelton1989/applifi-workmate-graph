import { NestedEnumSTATUSFilter } from "../inputs/NestedEnumSTATUSFilter";
export declare class EnumSTATUSFilter {
    equals?: "DRAFT" | "PUBLISHED" | "UNDER_REVIEW" | "PENDING_APPROVAL" | "IN_REVIEW" | "APPROVED" | "NO_ACTION_TAKEN" | "REJECTED_WITH_REASON" | "DECLINED" | "BANNED" | "SOFT_BANNED" | undefined;
    in?: Array<"DRAFT" | "PUBLISHED" | "UNDER_REVIEW" | "PENDING_APPROVAL" | "IN_REVIEW" | "APPROVED" | "NO_ACTION_TAKEN" | "REJECTED_WITH_REASON" | "DECLINED" | "BANNED" | "SOFT_BANNED"> | undefined;
    notIn?: Array<"DRAFT" | "PUBLISHED" | "UNDER_REVIEW" | "PENDING_APPROVAL" | "IN_REVIEW" | "APPROVED" | "NO_ACTION_TAKEN" | "REJECTED_WITH_REASON" | "DECLINED" | "BANNED" | "SOFT_BANNED"> | undefined;
    not?: NestedEnumSTATUSFilter | undefined;
}
