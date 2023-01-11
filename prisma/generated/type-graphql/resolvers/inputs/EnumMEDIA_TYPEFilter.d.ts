import { NestedEnumMEDIA_TYPEFilter } from "../inputs/NestedEnumMEDIA_TYPEFilter";
export declare class EnumMEDIA_TYPEFilter {
    equals?: "IMAGE" | "CAROUSEL" | "VIDEO" | undefined;
    in?: Array<"IMAGE" | "CAROUSEL" | "VIDEO"> | undefined;
    notIn?: Array<"IMAGE" | "CAROUSEL" | "VIDEO"> | undefined;
    not?: NestedEnumMEDIA_TYPEFilter | undefined;
}
