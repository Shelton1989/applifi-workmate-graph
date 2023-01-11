import { NestedEnumPUBLISH_STATUSFilter } from "../inputs/NestedEnumPUBLISH_STATUSFilter";
import { NestedEnumPUBLISH_STATUSWithAggregatesFilter } from "../inputs/NestedEnumPUBLISH_STATUSWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class EnumPUBLISH_STATUSWithAggregatesFilter {
    equals?: "DRAFT" | "PUBLISHED" | "UNPUBLISHED" | "UNDER_REVIEW" | "PENDING_APPROVAL" | "IN_REVIEW" | "APPROVED" | "NO_ACTION_TAKEN" | "REJECTED_WITH_REASON" | "DECLINED" | "BANNED" | "SOFT_BANNED" | undefined;
    in?: Array<"DRAFT" | "PUBLISHED" | "UNPUBLISHED" | "UNDER_REVIEW" | "PENDING_APPROVAL" | "IN_REVIEW" | "APPROVED" | "NO_ACTION_TAKEN" | "REJECTED_WITH_REASON" | "DECLINED" | "BANNED" | "SOFT_BANNED"> | undefined;
    notIn?: Array<"DRAFT" | "PUBLISHED" | "UNPUBLISHED" | "UNDER_REVIEW" | "PENDING_APPROVAL" | "IN_REVIEW" | "APPROVED" | "NO_ACTION_TAKEN" | "REJECTED_WITH_REASON" | "DECLINED" | "BANNED" | "SOFT_BANNED"> | undefined;
    not?: NestedEnumPUBLISH_STATUSWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumPUBLISH_STATUSFilter | undefined;
    _max?: NestedEnumPUBLISH_STATUSFilter | undefined;
}
