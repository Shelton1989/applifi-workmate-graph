import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class QueryScalarWhereInput {
    AND?: QueryScalarWhereInput[] | undefined;
    OR?: QueryScalarWhereInput[] | undefined;
    NOT?: QueryScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    tenantId?: StringFilter | undefined;
    queryLink?: StringNullableFilter | undefined;
    queryText?: StringNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    userId?: StringNullableFilter | undefined;
}
