import { PostCountAggregate } from "../outputs/PostCountAggregate";
import { PostMaxAggregate } from "../outputs/PostMaxAggregate";
import { PostMinAggregate } from "../outputs/PostMinAggregate";
export declare class PostGroupBy {
    id: string;
    type: "SHORT_VIDEO" | "IMAGE" | "CAROUSEL";
    caption: string | null;
    mediaUrl: string[] | null;
    isCommentsEnabled: boolean;
    authorId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: PostCountAggregate | null;
    _min: PostMinAggregate | null;
    _max: PostMaxAggregate | null;
}
