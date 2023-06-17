import { ProductKey } from "../models/ProductKey";
import { Tenant } from "../models/Tenant";
export declare class Billing {
    id: string;
    Tenant?: Tenant;
    tenantId: string;
    stripeCustomerId?: string | null;
    stripeSubscriptionId?: string | null;
    plan: "FREE" | "STANDARD" | "PRO" | "ENTERPRISE";
    status: "ACTIVE" | "PAST_DUE" | "CANCELED" | "UNPAID" | "INCOMPLETE" | "INCOMPLETE_EXPIRED" | "TRIALING";
    ProductKey?: ProductKey | null;
    createdAt: Date;
    updatedAt: Date;
}
