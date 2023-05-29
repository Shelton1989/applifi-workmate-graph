import { ReactionCountAggregate } from "../outputs/ReactionCountAggregate";
import { ReactionMaxAggregate } from "../outputs/ReactionMaxAggregate";
import { ReactionMinAggregate } from "../outputs/ReactionMinAggregate";
export declare class ReactionGroupBy {
    id: string;
    type: "LIKE" | "LOVE" | "DISLIKE";
    commentId: string | null;
    replyId: string | null;
    authorId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: ReactionCountAggregate | null;
    _min: ReactionMinAggregate | null;
    _max: ReactionMaxAggregate | null;
}
