import { ProductKeyCreateNestedManyWithoutBillingInput } from "../inputs/ProductKeyCreateNestedManyWithoutBillingInput";
export declare class BillingCreateWithoutTenantInput {
    id?: string | undefined;
    stripeCustomerId?: string | undefined;
    stripeSubscriptionId?: string | undefined;
    plan?: "FREE" | "STANDARD" | "PRO" | "ENTERPRISE" | undefined;
    status?: "ACTIVE" | "PAST_DUE" | "CANCELED" | "UNPAID" | "INCOMPLETE" | "INCOMPLETE_EXPIRED" | "TRIALING" | undefined;
    ProductKeys?: ProductKeyCreateNestedManyWithoutBillingInput | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
