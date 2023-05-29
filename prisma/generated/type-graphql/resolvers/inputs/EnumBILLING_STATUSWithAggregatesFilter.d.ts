import { NestedEnumBILLING_STATUSFilter } from "../inputs/NestedEnumBILLING_STATUSFilter";
import { NestedEnumBILLING_STATUSWithAggregatesFilter } from "../inputs/NestedEnumBILLING_STATUSWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class EnumBILLING_STATUSWithAggregatesFilter {
    equals?: "ACTIVE" | "PAST_DUE" | "CANCELED" | "UNPAID" | "INCOMPLETE" | "INCOMPLETE_EXPIRED" | "TRIALING" | undefined;
    in?: Array<"ACTIVE" | "PAST_DUE" | "CANCELED" | "UNPAID" | "INCOMPLETE" | "INCOMPLETE_EXPIRED" | "TRIALING"> | undefined;
    notIn?: Array<"ACTIVE" | "PAST_DUE" | "CANCELED" | "UNPAID" | "INCOMPLETE" | "INCOMPLETE_EXPIRED" | "TRIALING"> | undefined;
    not?: NestedEnumBILLING_STATUSWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumBILLING_STATUSFilter | undefined;
    _max?: NestedEnumBILLING_STATUSFilter | undefined;
}
