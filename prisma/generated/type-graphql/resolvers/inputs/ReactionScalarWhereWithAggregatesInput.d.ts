import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumREACTION_TYPEWithAggregatesFilter } from "../inputs/EnumREACTION_TYPEWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class ReactionScalarWhereWithAggregatesInput {
    AND?: ReactionScalarWhereWithAggregatesInput[] | undefined;
    OR?: ReactionScalarWhereWithAggregatesInput[] | undefined;
    NOT?: ReactionScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    type?: EnumREACTION_TYPEWithAggregatesFilter | undefined;
    experienceId?: StringNullableWithAggregatesFilter | undefined;
    postId?: StringNullableWithAggregatesFilter | undefined;
    commentId?: StringNullableWithAggregatesFilter | undefined;
    replyId?: StringNullableWithAggregatesFilter | undefined;
    authorId?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
