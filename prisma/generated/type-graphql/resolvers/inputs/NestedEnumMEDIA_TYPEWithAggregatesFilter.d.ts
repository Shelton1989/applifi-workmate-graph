import { NestedEnumMEDIA_TYPEFilter } from "../inputs/NestedEnumMEDIA_TYPEFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class NestedEnumMEDIA_TYPEWithAggregatesFilter {
    equals?: "TOPIC" | "SEASON_SERIES" | "EPISODE" | undefined;
    in?: Array<"TOPIC" | "SEASON_SERIES" | "EPISODE"> | undefined;
    notIn?: Array<"TOPIC" | "SEASON_SERIES" | "EPISODE"> | undefined;
    not?: NestedEnumMEDIA_TYPEWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumMEDIA_TYPEFilter | undefined;
    _max?: NestedEnumMEDIA_TYPEFilter | undefined;
}
