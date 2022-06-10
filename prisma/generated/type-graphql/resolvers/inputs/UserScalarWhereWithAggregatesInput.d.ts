import { BoolWithAggregatesFilter } from "../inputs/BoolWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumROLENullableListFilter } from "../inputs/EnumROLENullableListFilter";
import { StringNullableListFilter } from "../inputs/StringNullableListFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class UserScalarWhereWithAggregatesInput {
    AND?: UserScalarWhereWithAggregatesInput[] | undefined;
    OR?: UserScalarWhereWithAggregatesInput[] | undefined;
    NOT?: UserScalarWhereWithAggregatesInput[] | undefined;
    uid?: StringWithAggregatesFilter | undefined;
    id?: StringWithAggregatesFilter | undefined;
    username?: StringWithAggregatesFilter | undefined;
    email?: StringWithAggregatesFilter | undefined;
    roles?: EnumROLENullableListFilter | undefined;
    firstName?: StringNullableWithAggregatesFilter | undefined;
    lastName?: StringNullableWithAggregatesFilter | undefined;
    avatar?: StringNullableWithAggregatesFilter | undefined;
    coverImage?: StringNullableWithAggregatesFilter | undefined;
    dateOfBirth?: DateTimeWithAggregatesFilter | undefined;
    hasAcceptedTerms?: BoolWithAggregatesFilter | undefined;
    isFirstTimeUser?: BoolWithAggregatesFilter | undefined;
    followingIds?: StringNullableListFilter | undefined;
    followerIds?: StringNullableListFilter | undefined;
    productIds?: StringNullableListFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
