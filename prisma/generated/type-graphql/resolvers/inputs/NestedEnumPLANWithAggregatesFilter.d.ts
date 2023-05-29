import { NestedEnumPLANFilter } from "../inputs/NestedEnumPLANFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class NestedEnumPLANWithAggregatesFilter {
    equals?: "FREE" | "STANDARD" | "PRO" | "ENTERPRISE" | undefined;
    in?: Array<"FREE" | "STANDARD" | "PRO" | "ENTERPRISE"> | undefined;
    notIn?: Array<"FREE" | "STANDARD" | "PRO" | "ENTERPRISE"> | undefined;
    not?: NestedEnumPLANWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumPLANFilter | undefined;
    _max?: NestedEnumPLANFilter | undefined;
}
