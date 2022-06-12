import { NestedEnumROLENullableFilter } from "../inputs/NestedEnumROLENullableFilter";
export declare class EnumROLENullableFilter {
    equals?: "SUPER_ADMIN" | "ADMIN" | "ARTIST" | "BRAND_MANAGER" | "USER" | undefined;
    in?: Array<"SUPER_ADMIN" | "ADMIN" | "ARTIST" | "BRAND_MANAGER" | "USER"> | undefined;
    notIn?: Array<"SUPER_ADMIN" | "ADMIN" | "ARTIST" | "BRAND_MANAGER" | "USER"> | undefined;
    not?: NestedEnumROLENullableFilter | undefined;
    isSet?: boolean | undefined;
}
