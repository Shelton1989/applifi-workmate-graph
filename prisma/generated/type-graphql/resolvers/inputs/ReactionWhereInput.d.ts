import { CommentRelationFilter } from "../inputs/CommentRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumREACTION_TYPEFilter } from "../inputs/EnumREACTION_TYPEFilter";
import { ExperienceRelationFilter } from "../inputs/ExperienceRelationFilter";
import { PostRelationFilter } from "../inputs/PostRelationFilter";
import { ReplyRelationFilter } from "../inputs/ReplyRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class ReactionWhereInput {
    AND?: ReactionWhereInput[] | undefined;
    OR?: ReactionWhereInput[] | undefined;
    NOT?: ReactionWhereInput[] | undefined;
    id?: StringFilter | undefined;
    type?: EnumREACTION_TYPEFilter | undefined;
    Experience?: ExperienceRelationFilter | undefined;
    experienceId?: StringNullableFilter | undefined;
    Post?: PostRelationFilter | undefined;
    postId?: StringNullableFilter | undefined;
    Comment?: CommentRelationFilter | undefined;
    commentId?: StringNullableFilter | undefined;
    Reply?: ReplyRelationFilter | undefined;
    replyId?: StringNullableFilter | undefined;
    Author?: UserRelationFilter | undefined;
    authorId?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
