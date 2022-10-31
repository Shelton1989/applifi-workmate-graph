import { TopicCountAggregate } from "../outputs/TopicCountAggregate";
import { TopicMaxAggregate } from "../outputs/TopicMaxAggregate";
import { TopicMinAggregate } from "../outputs/TopicMinAggregate";
export declare class AggregateTopic {
    _count: TopicCountAggregate | null;
    _min: TopicMinAggregate | null;
    _max: TopicMaxAggregate | null;
}
