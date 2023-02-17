import { NestedEnumPAYMENT_TYPEFilter } from "../inputs/NestedEnumPAYMENT_TYPEFilter";
export declare class EnumPAYMENT_TYPEFilter {
    equals?: "OTHER" | "FULL" | "DEPOSIT" | "SECONDARY" | "FINAL" | undefined;
    in?: Array<"OTHER" | "FULL" | "DEPOSIT" | "SECONDARY" | "FINAL"> | undefined;
    notIn?: Array<"OTHER" | "FULL" | "DEPOSIT" | "SECONDARY" | "FINAL"> | undefined;
    not?: NestedEnumPAYMENT_TYPEFilter | undefined;
}
