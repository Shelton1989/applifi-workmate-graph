import { TenantCountAggregate } from "../outputs/TenantCountAggregate";
import { TenantMaxAggregate } from "../outputs/TenantMaxAggregate";
import { TenantMinAggregate } from "../outputs/TenantMinAggregate";
export declare class AggregateTenant {
    _count: TenantCountAggregate | null;
    _min: TenantMinAggregate | null;
    _max: TenantMaxAggregate | null;
}
