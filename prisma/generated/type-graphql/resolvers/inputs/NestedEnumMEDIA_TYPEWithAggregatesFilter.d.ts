import { NestedEnumMEDIA_TYPEFilter } from "../inputs/NestedEnumMEDIA_TYPEFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class NestedEnumMEDIA_TYPEWithAggregatesFilter {
    equals?: "SHORT_VIDEO" | "IMAGE" | "CAROUSEL" | undefined;
    in?: Array<"SHORT_VIDEO" | "IMAGE" | "CAROUSEL"> | undefined;
    notIn?: Array<"SHORT_VIDEO" | "IMAGE" | "CAROUSEL"> | undefined;
    not?: NestedEnumMEDIA_TYPEWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumMEDIA_TYPEFilter | undefined;
    _max?: NestedEnumMEDIA_TYPEFilter | undefined;
}