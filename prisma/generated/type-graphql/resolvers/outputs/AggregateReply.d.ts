import { ReplyCountAggregate } from "../outputs/ReplyCountAggregate";
import { ReplyMaxAggregate } from "../outputs/ReplyMaxAggregate";
import { ReplyMinAggregate } from "../outputs/ReplyMinAggregate";
export declare class AggregateReply {
    _count: ReplyCountAggregate | null;
    _min: ReplyMinAggregate | null;
    _max: ReplyMaxAggregate | null;
}
