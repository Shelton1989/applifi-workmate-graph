import { BoolFilter } from "../inputs/BoolFilter";
import { CommentListRelationFilter } from "../inputs/CommentListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumMEDIA_TYPEFilter } from "../inputs/EnumMEDIA_TYPEFilter";
import { ReactionListRelationFilter } from "../inputs/ReactionListRelationFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
import { UserRelationFilter } from "../inputs/UserRelationFilter";
export declare class PostWhereInput {
    AND?: PostWhereInput[] | undefined;
    OR?: PostWhereInput[] | undefined;
    NOT?: PostWhereInput[] | undefined;
    id?: StringFilter | undefined;
    type?: EnumMEDIA_TYPEFilter | undefined;
    caption?: StringNullableFilter | undefined;
    mediaUrl?: StringNullableListFilter | undefined;
    isCommentsEnabled?: BoolFilter | undefined;
    Author?: UserRelationFilter | undefined;
    authorId?: StringFilter | undefined;
    Comments?: CommentListRelationFilter | undefined;
    Reactions?: ReactionListRelationFilter | undefined;
    productLink?: StringNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
