export declare class BillingMinAggregate {
    id: string | null;
    tenantId: string | null;
    stripeCustomerId: string | null;
    plan: "FREE" | "STANDARD" | "PRO" | "ENTERPRISE" | null;
    status: "ACTIVE" | "PAST_DUE" | "CANCELED" | "UNPAID" | "INCOMPLETE" | "INCOMPLETE_EXPIRED" | "TRIALING" | null;
    createdAt: Date | null;
    updatedAt: Date | null;
}
