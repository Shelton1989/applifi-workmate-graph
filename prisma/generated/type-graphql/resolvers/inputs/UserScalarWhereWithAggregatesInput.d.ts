import { BoolNullableWithAggregatesFilter } from "../inputs/BoolNullableWithAggregatesFilter";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumROLENullableListFilter } from "../inputs/EnumROLENullableListFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class UserScalarWhereWithAggregatesInput {
    AND?: UserScalarWhereWithAggregatesInput[] | undefined;
    OR?: UserScalarWhereWithAggregatesInput[] | undefined;
    NOT?: UserScalarWhereWithAggregatesInput[] | undefined;
    tenantId?: StringNullableWithAggregatesFilter | undefined;
    uid?: StringWithAggregatesFilter | undefined;
    uuid?: StringNullableWithAggregatesFilter | undefined;
    id?: StringWithAggregatesFilter | undefined;
    username?: StringWithAggregatesFilter | undefined;
    email?: StringWithAggregatesFilter | undefined;
    roles?: EnumROLENullableListFilter | undefined;
    firstName?: StringNullableWithAggregatesFilter | undefined;
    lastName?: StringNullableWithAggregatesFilter | undefined;
    avatar?: StringNullableWithAggregatesFilter | undefined;
    hasAcceptedTerms?: BoolNullableWithAggregatesFilter | undefined;
    isFirstTimeUser?: BoolNullableWithAggregatesFilter | undefined;
    isVerified?: BoolNullableWithAggregatesFilter | undefined;
    isActive?: BoolNullableWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
