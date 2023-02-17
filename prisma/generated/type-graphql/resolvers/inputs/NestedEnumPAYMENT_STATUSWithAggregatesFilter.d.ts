import { NestedEnumPAYMENT_STATUSFilter } from "../inputs/NestedEnumPAYMENT_STATUSFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class NestedEnumPAYMENT_STATUSWithAggregatesFilter {
    equals?: "PENDING" | "PAID" | "REFUNDED" | "FAILED" | "CANCELLED" | "OTHER" | undefined;
    in?: Array<"PENDING" | "PAID" | "REFUNDED" | "FAILED" | "CANCELLED" | "OTHER"> | undefined;
    notIn?: Array<"PENDING" | "PAID" | "REFUNDED" | "FAILED" | "CANCELLED" | "OTHER"> | undefined;
    not?: NestedEnumPAYMENT_STATUSWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumPAYMENT_STATUSFilter | undefined;
    _max?: NestedEnumPAYMENT_STATUSFilter | undefined;
}
