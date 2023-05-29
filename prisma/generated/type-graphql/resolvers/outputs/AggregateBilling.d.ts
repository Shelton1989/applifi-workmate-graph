import { BillingCountAggregate } from "../outputs/BillingCountAggregate";
import { BillingMaxAggregate } from "../outputs/BillingMaxAggregate";
import { BillingMinAggregate } from "../outputs/BillingMinAggregate";
export declare class AggregateBilling {
    _count: BillingCountAggregate | null;
    _min: BillingMinAggregate | null;
    _max: BillingMaxAggregate | null;
}
