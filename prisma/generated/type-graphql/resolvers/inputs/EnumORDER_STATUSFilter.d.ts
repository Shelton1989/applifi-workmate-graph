import { NestedEnumORDER_STATUSFilter } from "../inputs/NestedEnumORDER_STATUSFilter";
export declare class EnumORDER_STATUSFilter {
    equals?: "OPEN" | "ORDERED" | "IN_PREPARATION" | "READY_FOR_COLLECTION" | "IN_TRANSIT" | "ARRIVED" | "COMPLETE" | "CANCELLED" | undefined;
    in?: Array<"OPEN" | "ORDERED" | "IN_PREPARATION" | "READY_FOR_COLLECTION" | "IN_TRANSIT" | "ARRIVED" | "COMPLETE" | "CANCELLED"> | undefined;
    notIn?: Array<"OPEN" | "ORDERED" | "IN_PREPARATION" | "READY_FOR_COLLECTION" | "IN_TRANSIT" | "ARRIVED" | "COMPLETE" | "CANCELLED"> | undefined;
    not?: NestedEnumORDER_STATUSFilter | undefined;
}
