import { BillingCreateNestedOneWithoutProductKeyInput } from "../inputs/BillingCreateNestedOneWithoutProductKeyInput";
export declare class ProductKeyCreateInput {
    id?: string | undefined;
    Billing: BillingCreateNestedOneWithoutProductKeyInput;
    key?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
