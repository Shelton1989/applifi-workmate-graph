import { NestedEnumAVAILABILITY_TYPEFilter } from "../inputs/NestedEnumAVAILABILITY_TYPEFilter";
export declare class EnumAVAILABILITY_TYPEFilter {
    equals?: "WEEKEND" | "DAILY" | "HOURLY" | "HALF_HOURLY" | undefined;
    in?: Array<"WEEKEND" | "DAILY" | "HOURLY" | "HALF_HOURLY"> | undefined;
    notIn?: Array<"WEEKEND" | "DAILY" | "HOURLY" | "HALF_HOURLY"> | undefined;
    not?: NestedEnumAVAILABILITY_TYPEFilter | undefined;
}
