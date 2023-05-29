import { Tenant } from "../models/Tenant";
export declare class Billing {
    id: string;
    Tenant?: Tenant;
    tenantId: string;
    stripeCustomerId?: string | null;
    plan: "FREE" | "STANDARD" | "PRO" | "ENTERPRISE";
    status: "ACTIVE" | "PAST_DUE" | "CANCELED" | "UNPAID" | "INCOMPLETE" | "INCOMPLETE_EXPIRED" | "TRIALING";
    createdAt: Date;
    updatedAt: Date;
}
