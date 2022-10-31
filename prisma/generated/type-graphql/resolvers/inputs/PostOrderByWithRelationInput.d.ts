import { CommentOrderByRelationAggregateInput } from "../inputs/CommentOrderByRelationAggregateInput";
import { EpisodeOrderByWithRelationInput } from "../inputs/EpisodeOrderByWithRelationInput";
import { ReactionOrderByRelationAggregateInput } from "../inputs/ReactionOrderByRelationAggregateInput";
import { SeasonSeriesOrderByWithRelationInput } from "../inputs/SeasonSeriesOrderByWithRelationInput";
import { TopicOrderByWithRelationInput } from "../inputs/TopicOrderByWithRelationInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class PostOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    type?: "asc" | "desc" | undefined;
    caption?: "asc" | "desc" | undefined;
    mediaUrl?: "asc" | "desc" | undefined;
    rating?: "asc" | "desc" | undefined;
    isCommentsEnabled?: "asc" | "desc" | undefined;
    canBeCounted?: "asc" | "desc" | undefined;
    Author?: UserOrderByWithRelationInput | undefined;
    authorId?: "asc" | "desc" | undefined;
    Comments?: CommentOrderByRelationAggregateInput | undefined;
    Reactions?: ReactionOrderByRelationAggregateInput | undefined;
    Topic?: TopicOrderByWithRelationInput | undefined;
    topicId?: "asc" | "desc" | undefined;
    SeasonSeries?: SeasonSeriesOrderByWithRelationInput | undefined;
    seasonSeriesId?: "asc" | "desc" | undefined;
    Episode?: EpisodeOrderByWithRelationInput | undefined;
    episodeId?: "asc" | "desc" | undefined;
    postLink?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
}
