import { NestedEnumREQUEST_STATUSFilter } from "../inputs/NestedEnumREQUEST_STATUSFilter";
export declare class EnumREQUEST_STATUSFilter {
    equals?: "OPEN" | "CLOSED" | "CLOSED_WITH_PREJUDICE" | "RESOLVED" | undefined;
    in?: Array<"OPEN" | "CLOSED" | "CLOSED_WITH_PREJUDICE" | "RESOLVED"> | undefined;
    notIn?: Array<"OPEN" | "CLOSED" | "CLOSED_WITH_PREJUDICE" | "RESOLVED"> | undefined;
    not?: NestedEnumREQUEST_STATUSFilter | undefined;
}
