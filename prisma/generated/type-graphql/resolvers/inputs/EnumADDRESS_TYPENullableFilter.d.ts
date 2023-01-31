import { NestedEnumADDRESS_TYPENullableFilter } from "../inputs/NestedEnumADDRESS_TYPENullableFilter";
export declare class EnumADDRESS_TYPENullableFilter {
    equals?: "PHYSICAL" | "POSTAL" | undefined;
    in?: Array<"PHYSICAL" | "POSTAL"> | undefined;
    notIn?: Array<"PHYSICAL" | "POSTAL"> | undefined;
    not?: NestedEnumADDRESS_TYPENullableFilter | undefined;
    isSet?: boolean | undefined;
}
