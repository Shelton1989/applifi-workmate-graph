import { NestedEnumPRODUCT_CATEGORYFilter } from "../inputs/NestedEnumPRODUCT_CATEGORYFilter";
import { NestedEnumPRODUCT_CATEGORYWithAggregatesFilter } from "../inputs/NestedEnumPRODUCT_CATEGORYWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class EnumPRODUCT_CATEGORYWithAggregatesFilter {
    equals?: "MEN" | "WOMEN" | "CHILDREN" | "ANY" | undefined;
    in?: Array<"MEN" | "WOMEN" | "CHILDREN" | "ANY"> | undefined;
    notIn?: Array<"MEN" | "WOMEN" | "CHILDREN" | "ANY"> | undefined;
    not?: NestedEnumPRODUCT_CATEGORYWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumPRODUCT_CATEGORYFilter | undefined;
    _max?: NestedEnumPRODUCT_CATEGORYFilter | undefined;
}
