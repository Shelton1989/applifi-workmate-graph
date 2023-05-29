import { LLMQueryCountAggregate } from "../outputs/LLMQueryCountAggregate";
import { LLMQueryMaxAggregate } from "../outputs/LLMQueryMaxAggregate";
import { LLMQueryMinAggregate } from "../outputs/LLMQueryMinAggregate";
export declare class AggregateLLMQuery {
    _count: LLMQueryCountAggregate | null;
    _min: LLMQueryMinAggregate | null;
    _max: LLMQueryMaxAggregate | null;
}
