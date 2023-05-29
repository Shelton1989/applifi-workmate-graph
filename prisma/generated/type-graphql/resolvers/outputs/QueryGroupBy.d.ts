import { QueryCountAggregate } from "../outputs/QueryCountAggregate";
import { QueryMaxAggregate } from "../outputs/QueryMaxAggregate";
import { QueryMinAggregate } from "../outputs/QueryMinAggregate";
export declare class QueryGroupBy {
    id: string;
    tenantId: string;
    queryLink: string | null;
    queryText: string | null;
    createdAt: Date;
    updatedAt: Date;
    userId: string | null;
    _count: QueryCountAggregate | null;
    _min: QueryMinAggregate | null;
    _max: QueryMaxAggregate | null;
}
