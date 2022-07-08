export declare class NestedEnumREQUEST_STATUSFilter {
    equals?: "OPEN" | "CLOSED" | "CLOSED_WITH_PREJUDICE" | "RESOLVED" | undefined;
    in?: Array<"OPEN" | "CLOSED" | "CLOSED_WITH_PREJUDICE" | "RESOLVED"> | undefined;
    notIn?: Array<"OPEN" | "CLOSED" | "CLOSED_WITH_PREJUDICE" | "RESOLVED"> | undefined;
    not?: NestedEnumREQUEST_STATUSFilter | undefined;
}
