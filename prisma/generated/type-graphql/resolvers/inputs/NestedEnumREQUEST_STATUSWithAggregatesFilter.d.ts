import { NestedEnumREQUEST_STATUSFilter } from "../inputs/NestedEnumREQUEST_STATUSFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class NestedEnumREQUEST_STATUSWithAggregatesFilter {
    equals?: "OPEN" | "CLOSED" | "CLOSED_WITH_PREJUDICE" | "RESOLVED" | undefined;
    in?: Array<"OPEN" | "CLOSED" | "CLOSED_WITH_PREJUDICE" | "RESOLVED"> | undefined;
    notIn?: Array<"OPEN" | "CLOSED" | "CLOSED_WITH_PREJUDICE" | "RESOLVED"> | undefined;
    not?: NestedEnumREQUEST_STATUSWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumREQUEST_STATUSFilter | undefined;
    _max?: NestedEnumREQUEST_STATUSFilter | undefined;
}
