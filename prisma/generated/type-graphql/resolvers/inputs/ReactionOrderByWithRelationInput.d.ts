import { CommentOrderByWithRelationInput } from "../inputs/CommentOrderByWithRelationInput";
import { EpisodeOrderByWithRelationInput } from "../inputs/EpisodeOrderByWithRelationInput";
import { PostOrderByWithRelationInput } from "../inputs/PostOrderByWithRelationInput";
import { ReplyOrderByWithRelationInput } from "../inputs/ReplyOrderByWithRelationInput";
import { SeasonSeriesOrderByWithRelationInput } from "../inputs/SeasonSeriesOrderByWithRelationInput";
import { TopicOrderByWithRelationInput } from "../inputs/TopicOrderByWithRelationInput";
import { UserOrderByWithRelationInput } from "../inputs/UserOrderByWithRelationInput";
export declare class ReactionOrderByWithRelationInput {
    id?: "asc" | "desc" | undefined;
    type?: "asc" | "desc" | undefined;
    Post?: PostOrderByWithRelationInput | undefined;
    postId?: "asc" | "desc" | undefined;
    Comment?: CommentOrderByWithRelationInput | undefined;
    commentId?: "asc" | "desc" | undefined;
    Reply?: ReplyOrderByWithRelationInput | undefined;
    replyId?: "asc" | "desc" | undefined;
    Author?: UserOrderByWithRelationInput | undefined;
    authorId?: "asc" | "desc" | undefined;
    Topic?: TopicOrderByWithRelationInput | undefined;
    topicId?: "asc" | "desc" | undefined;
    SeasonSeries?: SeasonSeriesOrderByWithRelationInput | undefined;
    seasonSeriesId?: "asc" | "desc" | undefined;
    Episode?: EpisodeOrderByWithRelationInput | undefined;
    episodeId?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
}
