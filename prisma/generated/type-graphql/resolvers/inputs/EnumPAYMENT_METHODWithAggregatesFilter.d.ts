import { NestedEnumPAYMENT_METHODFilter } from "../inputs/NestedEnumPAYMENT_METHODFilter";
import { NestedEnumPAYMENT_METHODWithAggregatesFilter } from "../inputs/NestedEnumPAYMENT_METHODWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class EnumPAYMENT_METHODWithAggregatesFilter {
    equals?: "STRIPE" | "PAYPAL" | "CASH" | "BANK_TRANSFER" | "OTHER" | undefined;
    in?: Array<"STRIPE" | "PAYPAL" | "CASH" | "BANK_TRANSFER" | "OTHER"> | undefined;
    notIn?: Array<"STRIPE" | "PAYPAL" | "CASH" | "BANK_TRANSFER" | "OTHER"> | undefined;
    not?: NestedEnumPAYMENT_METHODWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumPAYMENT_METHODFilter | undefined;
    _max?: NestedEnumPAYMENT_METHODFilter | undefined;
}
