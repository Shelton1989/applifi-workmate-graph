import { CommentCountAggregate } from "../outputs/CommentCountAggregate";
import { CommentMaxAggregate } from "../outputs/CommentMaxAggregate";
import { CommentMinAggregate } from "../outputs/CommentMinAggregate";
export declare class CommentGroupBy {
    id: string;
    text: string;
    documentId: string;
    authorId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: CommentCountAggregate | null;
    _min: CommentMinAggregate | null;
    _max: CommentMaxAggregate | null;
}
