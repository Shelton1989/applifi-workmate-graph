import { BillingCountAggregate } from "../outputs/BillingCountAggregate";
import { BillingMaxAggregate } from "../outputs/BillingMaxAggregate";
import { BillingMinAggregate } from "../outputs/BillingMinAggregate";
export declare class BillingGroupBy {
    id: string;
    tenantId: string;
    stripeCustomerId: string | null;
    plan: "FREE" | "STANDARD" | "PRO" | "ENTERPRISE";
    status: "ACTIVE" | "PAST_DUE" | "CANCELED" | "UNPAID" | "INCOMPLETE" | "INCOMPLETE_EXPIRED" | "TRIALING";
    createdAt: Date;
    updatedAt: Date;
    _count: BillingCountAggregate | null;
    _min: BillingMinAggregate | null;
    _max: BillingMaxAggregate | null;
}
