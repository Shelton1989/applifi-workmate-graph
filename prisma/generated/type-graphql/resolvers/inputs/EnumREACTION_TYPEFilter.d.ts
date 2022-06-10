import { NestedEnumREACTION_TYPEFilter } from "../inputs/NestedEnumREACTION_TYPEFilter";
export declare class EnumREACTION_TYPEFilter {
    equals?: "LIKE" | "LOVE" | "DISLIKE" | undefined;
    in?: Array<"LIKE" | "LOVE" | "DISLIKE"> | undefined;
    notIn?: Array<"LIKE" | "LOVE" | "DISLIKE"> | undefined;
    not?: NestedEnumREACTION_TYPEFilter | undefined;
}
