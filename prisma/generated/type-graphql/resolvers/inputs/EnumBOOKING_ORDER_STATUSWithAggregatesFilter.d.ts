import { NestedEnumBOOKING_ORDER_STATUSFilter } from "../inputs/NestedEnumBOOKING_ORDER_STATUSFilter";
import { NestedEnumBOOKING_ORDER_STATUSWithAggregatesFilter } from "../inputs/NestedEnumBOOKING_ORDER_STATUSWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class EnumBOOKING_ORDER_STATUSWithAggregatesFilter {
    equals?: "OPEN" | "BOOKED" | "BOOKED_PENDING_PAYMENT" | "READY_FOR_CHECK_IN" | "CHECKED_IN" | "READY_FOR_CHECK_OUT" | "COMPLETE" | "CANCELLED" | undefined;
    in?: Array<"OPEN" | "BOOKED" | "BOOKED_PENDING_PAYMENT" | "READY_FOR_CHECK_IN" | "CHECKED_IN" | "READY_FOR_CHECK_OUT" | "COMPLETE" | "CANCELLED"> | undefined;
    notIn?: Array<"OPEN" | "BOOKED" | "BOOKED_PENDING_PAYMENT" | "READY_FOR_CHECK_IN" | "CHECKED_IN" | "READY_FOR_CHECK_OUT" | "COMPLETE" | "CANCELLED"> | undefined;
    not?: NestedEnumBOOKING_ORDER_STATUSWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumBOOKING_ORDER_STATUSFilter | undefined;
    _max?: NestedEnumBOOKING_ORDER_STATUSFilter | undefined;
}