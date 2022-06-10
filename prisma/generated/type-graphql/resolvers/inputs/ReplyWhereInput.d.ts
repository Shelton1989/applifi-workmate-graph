import { CommentRelationFilter } from "../inputs/CommentRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { ReactionListRelationFilter } from "../inputs/ReactionListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class ReplyWhereInput {
    AND?: ReplyWhereInput[] | undefined;
    OR?: ReplyWhereInput[] | undefined;
    NOT?: ReplyWhereInput[] | undefined;
    id?: StringFilter | undefined;
    text?: StringFilter | undefined;
    Comment?: CommentRelationFilter | undefined;
    commentId?: StringFilter | undefined;
    Author?: UserRelationFilter | undefined;
    authorId?: StringFilter | undefined;
    Reactions?: ReactionListRelationFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
