import { NestedEnumORDER_STATUSFilter } from "../inputs/NestedEnumORDER_STATUSFilter";
import { NestedEnumORDER_STATUSWithAggregatesFilter } from "../inputs/NestedEnumORDER_STATUSWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class EnumORDER_STATUSWithAggregatesFilter {
    equals?: "OPEN" | "ORDERED" | "IN_PREPARATION" | "READY_FOR_COLLECTION" | "IN_TRANSIT" | "ARRIVED" | "COMPLETE" | "CANCELLED" | undefined;
    in?: Array<"OPEN" | "ORDERED" | "IN_PREPARATION" | "READY_FOR_COLLECTION" | "IN_TRANSIT" | "ARRIVED" | "COMPLETE" | "CANCELLED"> | undefined;
    notIn?: Array<"OPEN" | "ORDERED" | "IN_PREPARATION" | "READY_FOR_COLLECTION" | "IN_TRANSIT" | "ARRIVED" | "COMPLETE" | "CANCELLED"> | undefined;
    not?: NestedEnumORDER_STATUSWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumORDER_STATUSFilter | undefined;
    _max?: NestedEnumORDER_STATUSFilter | undefined;
}
