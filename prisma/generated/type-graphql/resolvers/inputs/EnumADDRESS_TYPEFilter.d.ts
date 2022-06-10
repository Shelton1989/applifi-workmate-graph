import { NestedEnumADDRESS_TYPEFilter } from "../inputs/NestedEnumADDRESS_TYPEFilter";
export declare class EnumADDRESS_TYPEFilter {
    equals?: "BILLING" | "DELIVERY" | "PHYSICAL" | "POSTAL" | undefined;
    in?: Array<"BILLING" | "DELIVERY" | "PHYSICAL" | "POSTAL"> | undefined;
    notIn?: Array<"BILLING" | "DELIVERY" | "PHYSICAL" | "POSTAL"> | undefined;
    not?: NestedEnumADDRESS_TYPEFilter | undefined;
}
