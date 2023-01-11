import { NestedEnumMEDIA_TYPEFilter } from "../inputs/NestedEnumMEDIA_TYPEFilter";
import { NestedEnumMEDIA_TYPEWithAggregatesFilter } from "../inputs/NestedEnumMEDIA_TYPEWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class EnumMEDIA_TYPEWithAggregatesFilter {
    equals?: "IMAGE" | "CAROUSEL" | "VIDEO" | undefined;
    in?: Array<"IMAGE" | "CAROUSEL" | "VIDEO"> | undefined;
    notIn?: Array<"IMAGE" | "CAROUSEL" | "VIDEO"> | undefined;
    not?: NestedEnumMEDIA_TYPEWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumMEDIA_TYPEFilter | undefined;
    _max?: NestedEnumMEDIA_TYPEFilter | undefined;
}
