import { NestedEnumBILLING_STATUSFilter } from "../inputs/NestedEnumBILLING_STATUSFilter";
export declare class EnumBILLING_STATUSFilter {
    equals?: "ACTIVE" | "PAST_DUE" | "CANCELED" | "UNPAID" | "INCOMPLETE" | "INCOMPLETE_EXPIRED" | "TRIALING" | undefined;
    in?: Array<"ACTIVE" | "PAST_DUE" | "CANCELED" | "UNPAID" | "INCOMPLETE" | "INCOMPLETE_EXPIRED" | "TRIALING"> | undefined;
    notIn?: Array<"ACTIVE" | "PAST_DUE" | "CANCELED" | "UNPAID" | "INCOMPLETE" | "INCOMPLETE_EXPIRED" | "TRIALING"> | undefined;
    not?: NestedEnumBILLING_STATUSFilter | undefined;
}
