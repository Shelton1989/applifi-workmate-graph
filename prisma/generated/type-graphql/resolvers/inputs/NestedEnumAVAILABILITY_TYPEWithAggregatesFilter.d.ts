import { NestedEnumAVAILABILITY_TYPEFilter } from "../inputs/NestedEnumAVAILABILITY_TYPEFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class NestedEnumAVAILABILITY_TYPEWithAggregatesFilter {
    equals?: "WEEKEND" | "DAILY" | "HOURLY" | "HALF_HOURLY" | undefined;
    in?: Array<"WEEKEND" | "DAILY" | "HOURLY" | "HALF_HOURLY"> | undefined;
    notIn?: Array<"WEEKEND" | "DAILY" | "HOURLY" | "HALF_HOURLY"> | undefined;
    not?: NestedEnumAVAILABILITY_TYPEWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumAVAILABILITY_TYPEFilter | undefined;
    _max?: NestedEnumAVAILABILITY_TYPEFilter | undefined;
}
