import { NestedEnumROLEFilter } from "../inputs/NestedEnumROLEFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class NestedEnumROLEWithAggregatesFilter {
    equals?: "SUPER_ADMIN" | "ADMIN" | "ARTIST" | "BRAND_MANAGER" | "USER" | undefined;
    in?: Array<"SUPER_ADMIN" | "ADMIN" | "ARTIST" | "BRAND_MANAGER" | "USER"> | undefined;
    notIn?: Array<"SUPER_ADMIN" | "ADMIN" | "ARTIST" | "BRAND_MANAGER" | "USER"> | undefined;
    not?: NestedEnumROLEWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumROLEFilter | undefined;
    _max?: NestedEnumROLEFilter | undefined;
}
