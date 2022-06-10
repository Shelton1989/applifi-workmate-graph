import { ReactionCountAggregate } from "../outputs/ReactionCountAggregate";
import { ReactionMaxAggregate } from "../outputs/ReactionMaxAggregate";
import { ReactionMinAggregate } from "../outputs/ReactionMinAggregate";
export declare class AggregateReaction {
    _count: ReactionCountAggregate | null;
    _min: ReactionMinAggregate | null;
    _max: ReactionMaxAggregate | null;
}
