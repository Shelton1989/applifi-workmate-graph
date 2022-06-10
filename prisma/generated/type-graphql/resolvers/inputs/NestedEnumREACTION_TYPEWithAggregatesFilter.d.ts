import { NestedEnumREACTION_TYPEFilter } from "../inputs/NestedEnumREACTION_TYPEFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class NestedEnumREACTION_TYPEWithAggregatesFilter {
    equals?: "LIKE" | "LOVE" | "DISLIKE" | undefined;
    in?: Array<"LIKE" | "LOVE" | "DISLIKE"> | undefined;
    notIn?: Array<"LIKE" | "LOVE" | "DISLIKE"> | undefined;
    not?: NestedEnumREACTION_TYPEWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumREACTION_TYPEFilter | undefined;
    _max?: NestedEnumREACTION_TYPEFilter | undefined;
}
