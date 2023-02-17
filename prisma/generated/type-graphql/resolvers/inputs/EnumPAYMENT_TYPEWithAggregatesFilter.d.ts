import { NestedEnumPAYMENT_TYPEFilter } from "../inputs/NestedEnumPAYMENT_TYPEFilter";
import { NestedEnumPAYMENT_TYPEWithAggregatesFilter } from "../inputs/NestedEnumPAYMENT_TYPEWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class EnumPAYMENT_TYPEWithAggregatesFilter {
    equals?: "OTHER" | "FULL" | "DEPOSIT" | "SECONDARY" | "FINAL" | undefined;
    in?: Array<"OTHER" | "FULL" | "DEPOSIT" | "SECONDARY" | "FINAL"> | undefined;
    notIn?: Array<"OTHER" | "FULL" | "DEPOSIT" | "SECONDARY" | "FINAL"> | undefined;
    not?: NestedEnumPAYMENT_TYPEWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumPAYMENT_TYPEFilter | undefined;
    _max?: NestedEnumPAYMENT_TYPEFilter | undefined;
}
