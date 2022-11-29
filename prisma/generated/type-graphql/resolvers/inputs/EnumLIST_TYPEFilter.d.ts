import { NestedEnumLIST_TYPEFilter } from "../inputs/NestedEnumLIST_TYPEFilter";
export declare class EnumLIST_TYPEFilter {
    equals?: "TRENDING" | "LATEST" | "POPULAR" | undefined;
    in?: Array<"TRENDING" | "LATEST" | "POPULAR"> | undefined;
    notIn?: Array<"TRENDING" | "LATEST" | "POPULAR"> | undefined;
    not?: NestedEnumLIST_TYPEFilter | undefined;
}
