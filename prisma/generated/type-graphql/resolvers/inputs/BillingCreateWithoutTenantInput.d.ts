import { ProductKeyCreateNestedOneWithoutBillingInput } from "../inputs/ProductKeyCreateNestedOneWithoutBillingInput";
export declare class BillingCreateWithoutTenantInput {
    id?: string | undefined;
    stripeCustomerId?: string | undefined;
    stripeSubscriptionId?: string | undefined;
    plan?: "FREE" | "STANDARD" | "PRO" | "ENTERPRISE" | undefined;
    status?: "ACTIVE" | "PAST_DUE" | "CANCELED" | "UNPAID" | "INCOMPLETE" | "INCOMPLETE_EXPIRED" | "TRIALING" | undefined;
    ProductKey?: ProductKeyCreateNestedOneWithoutBillingInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
