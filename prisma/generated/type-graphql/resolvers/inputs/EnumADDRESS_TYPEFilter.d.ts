import { NestedEnumADDRESS_TYPEFilter } from "../inputs/NestedEnumADDRESS_TYPEFilter";
export declare class EnumADDRESS_TYPEFilter {
    equals?: "PHYSICAL" | "POSTAL" | undefined;
    in?: Array<"PHYSICAL" | "POSTAL"> | undefined;
    notIn?: Array<"PHYSICAL" | "POSTAL"> | undefined;
    not?: NestedEnumADDRESS_TYPEFilter | undefined;
}
