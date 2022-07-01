import { NestedEnumROLENullableFilter } from "../inputs/NestedEnumROLENullableFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
export declare class NestedEnumROLENullableWithAggregatesFilter {
    equals?: "SUPER_ADMIN" | "ADMIN" | "ARTIST" | "BRAND_MANAGER" | "USER" | undefined;
    in?: Array<"SUPER_ADMIN" | "ADMIN" | "ARTIST" | "BRAND_MANAGER" | "USER"> | undefined;
    notIn?: Array<"SUPER_ADMIN" | "ADMIN" | "ARTIST" | "BRAND_MANAGER" | "USER"> | undefined;
    not?: NestedEnumROLENullableWithAggregatesFilter | undefined;
    _count?: NestedIntNullableFilter | undefined;
    _min?: NestedEnumROLENullableFilter | undefined;
    _max?: NestedEnumROLENullableFilter | undefined;
    isSet?: boolean | undefined;
}