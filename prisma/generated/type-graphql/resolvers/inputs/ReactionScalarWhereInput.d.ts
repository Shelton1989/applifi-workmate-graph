import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumREACTION_TYPEFilter } from "../inputs/EnumREACTION_TYPEFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class ReactionScalarWhereInput {
    AND?: ReactionScalarWhereInput[] | undefined;
    OR?: ReactionScalarWhereInput[] | undefined;
    NOT?: ReactionScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    type?: EnumREACTION_TYPEFilter | undefined;
    experienceId?: StringNullableFilter | undefined;
    postId?: StringNullableFilter | undefined;
    commentId?: StringNullableFilter | undefined;
    replyId?: StringNullableFilter | undefined;
    authorId?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
