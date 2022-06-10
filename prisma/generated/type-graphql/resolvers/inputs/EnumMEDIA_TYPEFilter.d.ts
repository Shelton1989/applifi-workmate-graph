import { NestedEnumMEDIA_TYPEFilter } from "../inputs/NestedEnumMEDIA_TYPEFilter";
export declare class EnumMEDIA_TYPEFilter {
    equals?: "SHORT_VIDEO" | "IMAGE" | "CAROUSEL" | undefined;
    in?: Array<"SHORT_VIDEO" | "IMAGE" | "CAROUSEL"> | undefined;
    notIn?: Array<"SHORT_VIDEO" | "IMAGE" | "CAROUSEL"> | undefined;
    not?: NestedEnumMEDIA_TYPEFilter | undefined;
}
