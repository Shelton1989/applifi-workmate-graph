import { NestedEnumPAYMENT_TYPEFilter } from "../inputs/NestedEnumPAYMENT_TYPEFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class NestedEnumPAYMENT_TYPEWithAggregatesFilter {
    equals?: "OTHER" | "FULL" | "DEPOSIT" | "SECONDARY" | "FINAL" | undefined;
    in?: Array<"OTHER" | "FULL" | "DEPOSIT" | "SECONDARY" | "FINAL"> | undefined;
    notIn?: Array<"OTHER" | "FULL" | "DEPOSIT" | "SECONDARY" | "FINAL"> | undefined;
    not?: NestedEnumPAYMENT_TYPEWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumPAYMENT_TYPEFilter | undefined;
    _max?: NestedEnumPAYMENT_TYPEFilter | undefined;
}
