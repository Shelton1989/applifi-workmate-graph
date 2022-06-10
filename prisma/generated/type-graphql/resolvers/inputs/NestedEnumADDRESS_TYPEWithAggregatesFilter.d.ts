import { NestedEnumADDRESS_TYPEFilter } from "../inputs/NestedEnumADDRESS_TYPEFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class NestedEnumADDRESS_TYPEWithAggregatesFilter {
    equals?: "BILLING" | "DELIVERY" | "PHYSICAL" | "POSTAL" | undefined;
    in?: Array<"BILLING" | "DELIVERY" | "PHYSICAL" | "POSTAL"> | undefined;
    notIn?: Array<"BILLING" | "DELIVERY" | "PHYSICAL" | "POSTAL"> | undefined;
    not?: NestedEnumADDRESS_TYPEWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumADDRESS_TYPEFilter | undefined;
    _max?: NestedEnumADDRESS_TYPEFilter | undefined;
}
