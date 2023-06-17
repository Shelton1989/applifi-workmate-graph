import { BillingCreateNestedOneWithoutProductKeysInput } from "../inputs/BillingCreateNestedOneWithoutProductKeysInput";
export declare class ProductKeyCreateInput {
    id?: string | undefined;
    Billing?: BillingCreateNestedOneWithoutProductKeysInput | undefined;
    createdBy?: string | undefined;
    key?: string | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
