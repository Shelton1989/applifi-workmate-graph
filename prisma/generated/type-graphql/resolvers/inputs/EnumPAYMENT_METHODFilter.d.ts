import { NestedEnumPAYMENT_METHODFilter } from "../inputs/NestedEnumPAYMENT_METHODFilter";
export declare class EnumPAYMENT_METHODFilter {
    equals?: "STRIPE" | "PAYPAL" | "CASH" | "BANK_TRANSFER" | "OTHER" | undefined;
    in?: Array<"STRIPE" | "PAYPAL" | "CASH" | "BANK_TRANSFER" | "OTHER"> | undefined;
    notIn?: Array<"STRIPE" | "PAYPAL" | "CASH" | "BANK_TRANSFER" | "OTHER"> | undefined;
    not?: NestedEnumPAYMENT_METHODFilter | undefined;
}
