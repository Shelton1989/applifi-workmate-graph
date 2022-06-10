import { NestedEnumPRODUCT_TYPEFilter } from "../inputs/NestedEnumPRODUCT_TYPEFilter";
import { NestedEnumPRODUCT_TYPEWithAggregatesFilter } from "../inputs/NestedEnumPRODUCT_TYPEWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class EnumPRODUCT_TYPEWithAggregatesFilter {
    equals?: "SNEAKER" | "TSHIRT" | "CREWNECK" | "JEANS" | "JOGGER" | "FITTED" | undefined;
    in?: Array<"SNEAKER" | "TSHIRT" | "CREWNECK" | "JEANS" | "JOGGER" | "FITTED"> | undefined;
    notIn?: Array<"SNEAKER" | "TSHIRT" | "CREWNECK" | "JEANS" | "JOGGER" | "FITTED"> | undefined;
    not?: NestedEnumPRODUCT_TYPEWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumPRODUCT_TYPEFilter | undefined;
    _max?: NestedEnumPRODUCT_TYPEFilter | undefined;
}
