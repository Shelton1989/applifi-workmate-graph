export declare class BillingCreateWithoutTenantInput {
    id?: string | undefined;
    stripeCustomerId?: string | undefined;
    plan?: "FREE" | "STANDARD" | "PRO" | "ENTERPRISE" | undefined;
    status?: "ACTIVE" | "PAST_DUE" | "CANCELED" | "UNPAID" | "INCOMPLETE" | "INCOMPLETE_EXPIRED" | "TRIALING" | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
