import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumROLEFilter } from "../inputs/EnumROLEFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
export declare class UserScalarWhereInput {
    AND?: UserScalarWhereInput[] | undefined;
    OR?: UserScalarWhereInput[] | undefined;
    NOT?: UserScalarWhereInput[] | undefined;
    uid?: StringFilter | undefined;
    id?: StringFilter | undefined;
    username?: StringFilter | undefined;
    email?: StringFilter | undefined;
    roles?: EnumROLEFilter | undefined;
    firstName?: StringNullableFilter | undefined;
    lastName?: StringNullableFilter | undefined;
    avatar?: StringNullableFilter | undefined;
    coverImage?: StringNullableFilter | undefined;
    dateOfBirth?: DateTimeFilter | undefined;
    hasAcceptedTerms?: BoolFilter | undefined;
    isFirstTimeUser?: BoolFilter | undefined;
    followingIds?: StringNullableListFilter | undefined;
    followerIds?: StringNullableListFilter | undefined;
    productIds?: StringNullableListFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
