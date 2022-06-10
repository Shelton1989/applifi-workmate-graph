import { ReplyCountAggregate } from "../outputs/ReplyCountAggregate";
import { ReplyMaxAggregate } from "../outputs/ReplyMaxAggregate";
import { ReplyMinAggregate } from "../outputs/ReplyMinAggregate";
export declare class ReplyGroupBy {
    id: string;
    text: string;
    commentId: string;
    authorId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: ReplyCountAggregate | null;
    _min: ReplyMinAggregate | null;
    _max: ReplyMaxAggregate | null;
}
