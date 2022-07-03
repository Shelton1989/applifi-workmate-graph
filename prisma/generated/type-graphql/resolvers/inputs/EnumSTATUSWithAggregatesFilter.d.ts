import { NestedEnumSTATUSFilter } from "../inputs/NestedEnumSTATUSFilter";
import { NestedEnumSTATUSWithAggregatesFilter } from "../inputs/NestedEnumSTATUSWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class EnumSTATUSWithAggregatesFilter {
    equals?: "DRAFT" | "PUBLISHED" | "UNDER_REVIEW" | "PENDING_APPROVAL" | "IN_REVIEW" | "APPROVED" | "NO_ACTION_TAKEN" | "REJECTED_WITH_REASON" | "DECLINED" | "BANNED" | "SOFT_BANNED" | undefined;
    in?: Array<"DRAFT" | "PUBLISHED" | "UNDER_REVIEW" | "PENDING_APPROVAL" | "IN_REVIEW" | "APPROVED" | "NO_ACTION_TAKEN" | "REJECTED_WITH_REASON" | "DECLINED" | "BANNED" | "SOFT_BANNED"> | undefined;
    notIn?: Array<"DRAFT" | "PUBLISHED" | "UNDER_REVIEW" | "PENDING_APPROVAL" | "IN_REVIEW" | "APPROVED" | "NO_ACTION_TAKEN" | "REJECTED_WITH_REASON" | "DECLINED" | "BANNED" | "SOFT_BANNED"> | undefined;
    not?: NestedEnumSTATUSWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumSTATUSFilter | undefined;
    _max?: NestedEnumSTATUSFilter | undefined;
}
