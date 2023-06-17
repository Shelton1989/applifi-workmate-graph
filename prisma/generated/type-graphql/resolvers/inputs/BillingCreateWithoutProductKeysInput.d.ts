import { TenantCreateNestedOneWithoutBillingInput } from "../inputs/TenantCreateNestedOneWithoutBillingInput";
export declare class BillingCreateWithoutProductKeysInput {
    id?: string | undefined;
    Tenant: TenantCreateNestedOneWithoutBillingInput;
    stripeCustomerId?: string | undefined;
    stripeSubscriptionId?: string | undefined;
    plan?: "FREE" | "STANDARD" | "PRO" | "ENTERPRISE" | undefined;
    status?: "ACTIVE" | "PAST_DUE" | "CANCELED" | "UNPAID" | "INCOMPLETE" | "INCOMPLETE_EXPIRED" | "TRIALING" | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
