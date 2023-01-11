import { NestedEnumLIST_TYPEFilter } from "../inputs/NestedEnumLIST_TYPEFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class NestedEnumLIST_TYPEWithAggregatesFilter {
    equals?: "TRENDING" | "LATEST" | "POPULAR" | "FEATURED" | undefined;
    in?: Array<"TRENDING" | "LATEST" | "POPULAR" | "FEATURED"> | undefined;
    notIn?: Array<"TRENDING" | "LATEST" | "POPULAR" | "FEATURED"> | undefined;
    not?: NestedEnumLIST_TYPEWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumLIST_TYPEFilter | undefined;
    _max?: NestedEnumLIST_TYPEFilter | undefined;
}
