import { NestedEnumSIZE_REGIONFilter } from "../inputs/NestedEnumSIZE_REGIONFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class NestedEnumSIZE_REGIONWithAggregatesFilter {
    equals?: "US" | "UK" | "EU" | "UNIVERSAL" | undefined;
    in?: Array<"US" | "UK" | "EU" | "UNIVERSAL"> | undefined;
    notIn?: Array<"US" | "UK" | "EU" | "UNIVERSAL"> | undefined;
    not?: NestedEnumSIZE_REGIONWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumSIZE_REGIONFilter | undefined;
    _max?: NestedEnumSIZE_REGIONFilter | undefined;
}
