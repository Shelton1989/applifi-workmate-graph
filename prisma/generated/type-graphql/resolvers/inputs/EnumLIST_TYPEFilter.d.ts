import { NestedEnumLIST_TYPEFilter } from "../inputs/NestedEnumLIST_TYPEFilter";
export declare class EnumLIST_TYPEFilter {
    equals?: "TRENDING" | "LATEST" | "POPULAR" | "FEATURED" | undefined;
    in?: Array<"TRENDING" | "LATEST" | "POPULAR" | "FEATURED"> | undefined;
    notIn?: Array<"TRENDING" | "LATEST" | "POPULAR" | "FEATURED"> | undefined;
    not?: NestedEnumLIST_TYPEFilter | undefined;
}
