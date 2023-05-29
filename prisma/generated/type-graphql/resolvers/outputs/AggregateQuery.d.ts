import { QueryCountAggregate } from "../outputs/QueryCountAggregate";
import { QueryMaxAggregate } from "../outputs/QueryMaxAggregate";
import { QueryMinAggregate } from "../outputs/QueryMinAggregate";
export declare class AggregateQuery {
    _count: QueryCountAggregate | null;
    _min: QueryMinAggregate | null;
    _max: QueryMaxAggregate | null;
}
