import { NestedEnumEXPERIENCE_CATEGORYNullableFilter } from "../inputs/NestedEnumEXPERIENCE_CATEGORYNullableFilter";
import { NestedEnumEXPERIENCE_CATEGORYNullableWithAggregatesFilter } from "../inputs/NestedEnumEXPERIENCE_CATEGORYNullableWithAggregatesFilter";
import { NestedIntNullableFilter } from "../inputs/NestedIntNullableFilter";
export declare class EnumEXPERIENCE_CATEGORYNullableWithAggregatesFilter {
    equals?: "CAMPING" | undefined;
    in?: "CAMPING"[] | undefined;
    notIn?: "CAMPING"[] | undefined;
    not?: NestedEnumEXPERIENCE_CATEGORYNullableWithAggregatesFilter | undefined;
    _count?: NestedIntNullableFilter | undefined;
    _min?: NestedEnumEXPERIENCE_CATEGORYNullableFilter | undefined;
    _max?: NestedEnumEXPERIENCE_CATEGORYNullableFilter | undefined;
    isSet?: boolean | undefined;
}