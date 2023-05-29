import { LLMQueryCountAggregate } from "../outputs/LLMQueryCountAggregate";
import { LLMQueryMaxAggregate } from "../outputs/LLMQueryMaxAggregate";
import { LLMQueryMinAggregate } from "../outputs/LLMQueryMinAggregate";
export declare class LLMQueryGroupBy {
    id: string;
    tenantId: string;
    queryLink: string | null;
    queryText: string | null;
    createdAt: Date;
    updatedAt: Date;
    userId: string | null;
    _count: LLMQueryCountAggregate | null;
    _min: LLMQueryMinAggregate | null;
    _max: LLMQueryMaxAggregate | null;
}
