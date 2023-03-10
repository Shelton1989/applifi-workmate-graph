import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { UserListRelationFilter } from "../inputs/UserListRelationFilter";
export declare class WardWhereInput {
    AND?: WardWhereInput[] | undefined;
    OR?: WardWhereInput[] | undefined;
    NOT?: WardWhereInput[] | undefined;
    id?: StringFilter | undefined;
    number?: IntFilter | undefined;
    name?: StringFilter | undefined;
    description?: StringNullableFilter | undefined;
    Users?: UserListRelationFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
