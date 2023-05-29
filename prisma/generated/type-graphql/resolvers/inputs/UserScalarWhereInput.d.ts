import { BoolNullableFilter } from "../inputs/BoolNullableFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumROLENullableListFilter } from "../inputs/EnumROLENullableListFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
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
    hasAcceptedTerms?: BoolNullableFilter | undefined;
    isFirstTimeUser?: BoolNullableFilter | undefined;
    isVerified?: BoolNullableFilter | undefined;
    isActive?: BoolNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
