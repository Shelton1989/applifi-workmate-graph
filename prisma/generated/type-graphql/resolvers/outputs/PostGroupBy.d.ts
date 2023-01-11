import { PostAvgAggregate } from "../outputs/PostAvgAggregate";
import { PostCountAggregate } from "../outputs/PostCountAggregate";
import { PostMaxAggregate } from "../outputs/PostMaxAggregate";
import { PostMinAggregate } from "../outputs/PostMinAggregate";
import { PostSumAggregate } from "../outputs/PostSumAggregate";
export declare class PostGroupBy {
    id: string;
    type: "IMAGE" | "CAROUSEL" | "VIDEO";
    caption: string | null;
    mediaUrl: string[] | null;
    rating: number;
    isCommentsEnabled: boolean;
    canBeCounted: boolean;
    authorId: string;
    experienceId: string | null;
    postLink: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: PostCountAggregate | null;
    _avg: PostAvgAggregate | null;
    _sum: PostSumAggregate | null;
    _min: PostMinAggregate | null;
    _max: PostMaxAggregate | null;
}
