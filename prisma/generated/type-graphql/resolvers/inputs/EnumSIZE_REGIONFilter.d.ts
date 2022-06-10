import { NestedEnumSIZE_REGIONFilter } from "../inputs/NestedEnumSIZE_REGIONFilter";
export declare class EnumSIZE_REGIONFilter {
    equals?: "US" | "UK" | "EU" | "UNIVERSAL" | undefined;
    in?: Array<"US" | "UK" | "EU" | "UNIVERSAL"> | undefined;
    notIn?: Array<"US" | "UK" | "EU" | "UNIVERSAL"> | undefined;
    not?: NestedEnumSIZE_REGIONFilter | undefined;
}
