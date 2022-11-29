import { TopicAvgAggregate } from "../outputs/TopicAvgAggregate";
import { TopicCountAggregate } from "../outputs/TopicCountAggregate";
import { TopicMaxAggregate } from "../outputs/TopicMaxAggregate";
import { TopicMinAggregate } from "../outputs/TopicMinAggregate";
import { TopicSumAggregate } from "../outputs/TopicSumAggregate";
export declare class AggregateTopic {
    _count: TopicCountAggregate | null;
    _avg: TopicAvgAggregate | null;
    _sum: TopicSumAggregate | null;
    _min: TopicMinAggregate | null;
    _max: TopicMaxAggregate | null;
}
