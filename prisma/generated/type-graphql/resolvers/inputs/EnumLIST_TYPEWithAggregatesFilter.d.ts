import { NestedEnumLIST_TYPEFilter } from "../inputs/NestedEnumLIST_TYPEFilter";
import { NestedEnumLIST_TYPEWithAggregatesFilter } from "../inputs/NestedEnumLIST_TYPEWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class EnumLIST_TYPEWithAggregatesFilter {
    equals?: "TRENDING" | "LATEST" | "POPULAR" | undefined;
    in?: Array<"TRENDING" | "LATEST" | "POPULAR"> | undefined;
    notIn?: Array<"TRENDING" | "LATEST" | "POPULAR"> | undefined;
    not?: NestedEnumLIST_TYPEWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumLIST_TYPEFilter | undefined;
    _max?: NestedEnumLIST_TYPEFilter | undefined;
}
