import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumMEDIA_TYPEFilter } from "../inputs/EnumMEDIA_TYPEFilter";
import { FloatFilter } from "../inputs/FloatFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
export declare class PostScalarWhereInput {
    AND?: PostScalarWhereInput[] | undefined;
    OR?: PostScalarWhereInput[] | undefined;
    NOT?: PostScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    type?: EnumMEDIA_TYPEFilter | undefined;
    caption?: StringNullableFilter | undefined;
    mediaUrl?: StringNullableListFilter | undefined;
    rating?: FloatFilter | undefined;
    isCommentsEnabled?: BoolFilter | undefined;
    canBeCounted?: BoolFilter | undefined;
    authorId?: StringFilter | undefined;
    topicId?: StringNullableFilter | undefined;
    seasonSeriesId?: StringNullableFilter | undefined;
    episodeId?: StringNullableFilter | undefined;
    postLink?: StringNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
