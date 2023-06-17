import { ProductKeyCreateNestedOneWithoutBillingInput } from "../inputs/ProductKeyCreateNestedOneWithoutBillingInput";
import { TenantCreateNestedOneWithoutBillingInput } from "../inputs/TenantCreateNestedOneWithoutBillingInput";
export declare class BillingCreateInput {
    id?: string | undefined;
    Tenant: TenantCreateNestedOneWithoutBillingInput;
    stripeCustomerId?: string | undefined;
    stripeSubscriptionId?: string | undefined;
    plan?: "FREE" | "STANDARD" | "PRO" | "ENTERPRISE" | undefined;
    status?: "ACTIVE" | "PAST_DUE" | "CANCELED" | "UNPAID" | "INCOMPLETE" | "INCOMPLETE_EXPIRED" | "TRIALING" | undefined;
    ProductKey?: ProductKeyCreateNestedOneWithoutBillingInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
