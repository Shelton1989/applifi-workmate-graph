import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { DateTimeNullableFilter } from "../inputs/DateTimeNullableFilter";
import { EnumROLENullableListFilter } from "../inputs/EnumROLENullableListFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
export declare class UserScalarWhereInput {
    AND?: UserScalarWhereInput[] | undefined;
    OR?: UserScalarWhereInput[] | undefined;
    NOT?: UserScalarWhereInput[] | undefined;
    tenantId?: StringNullableFilter | undefined;
    uid?: StringFilter | undefined;
    uuid?: StringNullableFilter | undefined;
    id?: StringFilter | undefined;
    username?: StringFilter | undefined;
    email?: StringFilter | undefined;
    roles?: EnumROLENullableListFilter | undefined;
    firstName?: StringNullableFilter | undefined;
    lastName?: StringNullableFilter | undefined;
    avatar?: StringNullableFilter | undefined;
    coverImage?: StringNullableFilter | undefined;
    dateOfBirth?: DateTimeNullableFilter | undefined;
    biography?: StringNullableFilter | undefined;
    hasAcceptedTerms?: BoolNullableFilter | undefined;
    isFirstTimeUser?: BoolNullableFilter | undefined;
    isVerified?: BoolNullableFilter | undefined;
    followingIds?: StringNullableListFilter | undefined;
    followerIds?: StringNullableListFilter | undefined;
    experienceIds?: StringNullableListFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
