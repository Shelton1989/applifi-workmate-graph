import { NestedEnumPLANFilter } from "../inputs/NestedEnumPLANFilter";
export declare class EnumPLANFilter {
    equals?: "FREE" | "STANDARD" | "PRO" | "ENTERPRISE" | undefined;
    in?: Array<"FREE" | "STANDARD" | "PRO" | "ENTERPRISE"> | undefined;
    notIn?: Array<"FREE" | "STANDARD" | "PRO" | "ENTERPRISE"> | undefined;
    not?: NestedEnumPLANFilter | undefined;
}
