import { CommentOrderByRelationAggregateInput } from "../inputs/CommentOrderByRelationAggregateInput";
import { ExperienceOrderByWithRelationInput } from "../inputs/ExperienceOrderByWithRelationInput";
import { ReactionOrderByRelationAggregateInput } from "../inputs/ReactionOrderByRelationAggregateInput";
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
    Experience?: ExperienceOrderByWithRelationInput | undefined;
    experienceId?: "asc" | "desc" | undefined;
    Comments?: CommentOrderByRelationAggregateInput | undefined;
    Reactions?: ReactionOrderByRelationAggregateInput | undefined;
    postLink?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
}
