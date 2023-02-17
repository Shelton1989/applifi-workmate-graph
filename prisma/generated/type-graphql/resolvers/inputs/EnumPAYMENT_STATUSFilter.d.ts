import { NestedEnumPAYMENT_STATUSFilter } from "../inputs/NestedEnumPAYMENT_STATUSFilter";
export declare class EnumPAYMENT_STATUSFilter {
    equals?: "PENDING" | "PAID" | "REFUNDED" | "FAILED" | "CANCELLED" | "OTHER" | undefined;
    in?: Array<"PENDING" | "PAID" | "REFUNDED" | "FAILED" | "CANCELLED" | "OTHER"> | undefined;
    notIn?: Array<"PENDING" | "PAID" | "REFUNDED" | "FAILED" | "CANCELLED" | "OTHER"> | undefined;
    not?: NestedEnumPAYMENT_STATUSFilter | undefined;
}
