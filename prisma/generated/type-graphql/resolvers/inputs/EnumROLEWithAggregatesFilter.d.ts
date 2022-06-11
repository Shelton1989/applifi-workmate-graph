import { NestedEnumROLEFilter } from "../inputs/NestedEnumROLEFilter";
import { NestedEnumROLEWithAggregatesFilter } from "../inputs/NestedEnumROLEWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class EnumROLEWithAggregatesFilter {
    equals?: "SUPER_ADMIN" | "ADMIN" | "ARTIST" | "BRAND_MANAGER" | "USER" | undefined;
    in?: Array<"SUPER_ADMIN" | "ADMIN" | "ARTIST" | "BRAND_MANAGER" | "USER"> | undefined;
    notIn?: Array<"SUPER_ADMIN" | "ADMIN" | "ARTIST" | "BRAND_MANAGER" | "USER"> | undefined;
    not?: NestedEnumROLEWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumROLEFilter | undefined;
    _max?: NestedEnumROLEFilter | undefined;
}
