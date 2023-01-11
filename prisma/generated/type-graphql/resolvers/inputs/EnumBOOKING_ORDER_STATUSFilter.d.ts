import { NestedEnumBOOKING_ORDER_STATUSFilter } from "../inputs/NestedEnumBOOKING_ORDER_STATUSFilter";
export declare class EnumBOOKING_ORDER_STATUSFilter {
    equals?: "OPEN" | "BOOKED" | "BOOKED_PENDING_PAYMENT" | "READY_FOR_CHECK_IN" | "CHECKED_IN" | "READY_FOR_CHECK_OUT" | "COMPLETE" | "CANCELLED" | undefined;
    in?: Array<"OPEN" | "BOOKED" | "BOOKED_PENDING_PAYMENT" | "READY_FOR_CHECK_IN" | "CHECKED_IN" | "READY_FOR_CHECK_OUT" | "COMPLETE" | "CANCELLED"> | undefined;
    notIn?: Array<"OPEN" | "BOOKED" | "BOOKED_PENDING_PAYMENT" | "READY_FOR_CHECK_IN" | "CHECKED_IN" | "READY_FOR_CHECK_OUT" | "COMPLETE" | "CANCELLED"> | undefined;
    not?: NestedEnumBOOKING_ORDER_STATUSFilter | undefined;
}
