import { NestedEnumADDRESS_TYPENullableFilter } from "../inputs/NestedEnumADDRESS_TYPENullableFilter";
import { NestedEnumADDRESS_TYPENullableWithAggregatesFilter } from "../inputs/NestedEnumADDRESS_TYPENullableWithAggregatesFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
export declare class EnumADDRESS_TYPENullableWithAggregatesFilter {
    equals?: "PHYSICAL" | "POSTAL" | undefined;
    in?: Array<"PHYSICAL" | "POSTAL"> | undefined;
    notIn?: Array<"PHYSICAL" | "POSTAL"> | undefined;
    not?: NestedEnumADDRESS_TYPENullableWithAggregatesFilter | undefined;
    _count?: NestedIntNullableFilter | undefined;
    _min?: NestedEnumADDRESS_TYPENullableFilter | undefined;
    _max?: NestedEnumADDRESS_TYPENullableFilter | undefined;
    isSet?: boolean | undefined;
}
