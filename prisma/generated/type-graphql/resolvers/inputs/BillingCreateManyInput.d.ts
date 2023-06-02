export declare class BillingCreateManyInput {
    id?: string | undefined;
    tenantId: string;
    stripeCustomerId?: string | undefined;
    stripeSubscriptionId?: string | undefined;
    plan?: "FREE" | "STANDARD" | "PRO" | "ENTERPRISE" | undefined;
    status?: "ACTIVE" | "PAST_DUE" | "CANCELED" | "UNPAID" | "INCOMPLETE" | "INCOMPLETE_EXPIRED" | "TRIALING" | undefined;
    createdAt?: Date | undefined;
    updatedAt?: Date | undefined;
}
