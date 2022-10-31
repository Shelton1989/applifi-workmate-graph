import { NestedEnumROLENullableFilter } from "../inputs/NestedEnumROLENullableFilter";
import { NestedEnumROLENullableWithAggregatesFilter } from "../inputs/NestedEnumROLENullableWithAggregatesFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
export declare class EnumROLENullableWithAggregatesFilter {
    equals?: "SUPER_ADMIN" | "ADMIN" | "CRITIC" | "USER" | undefined;
    in?: Array<"SUPER_ADMIN" | "ADMIN" | "CRITIC" | "USER"> | undefined;
    notIn?: Array<"SUPER_ADMIN" | "ADMIN" | "CRITIC" | "USER"> | undefined;
    not?: NestedEnumROLENullableWithAggregatesFilter | undefined;
    _count?: NestedIntNullableFilter | undefined;
    _min?: NestedEnumROLENullableFilter | undefined;
    _max?: NestedEnumROLENullableFilter | undefined;
    isSet?: boolean | undefined;
}
