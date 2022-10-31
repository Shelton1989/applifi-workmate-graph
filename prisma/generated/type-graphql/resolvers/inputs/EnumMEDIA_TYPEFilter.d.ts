import { NestedEnumMEDIA_TYPEFilter } from "../inputs/NestedEnumMEDIA_TYPEFilter";
export declare class EnumMEDIA_TYPEFilter {
    equals?: "TOPIC" | "SEASON_SERIES" | "EPISODE" | undefined;
    in?: Array<"TOPIC" | "SEASON_SERIES" | "EPISODE"> | undefined;
    notIn?: Array<"TOPIC" | "SEASON_SERIES" | "EPISODE"> | undefined;
    not?: NestedEnumMEDIA_TYPEFilter | undefined;
}
