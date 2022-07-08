import { RequestCountAggregate } from "../outputs/RequestCountAggregate";
import { RequestMaxAggregate } from "../outputs/RequestMaxAggregate";
import { RequestMinAggregate } from "../outputs/RequestMinAggregate";
export declare class AggregateRequest {
    _count: RequestCountAggregate | null;
    _min: RequestMinAggregate | null;
    _max: RequestMaxAggregate | null;
}
