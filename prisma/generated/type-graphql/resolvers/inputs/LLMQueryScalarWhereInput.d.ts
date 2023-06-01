import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class LLMQueryScalarWhereInput {
    AND?: LLMQueryScalarWhereInput[] | undefined;
    OR?: LLMQueryScalarWhereInput[] | undefined;
    NOT?: LLMQueryScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    tenantId?: StringFilter | undefined;
    queryLink?: StringNullableFilter | undefined;
    question?: StringNullableFilter | undefined;
    response?: StringNullableFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
    userId?: StringNullableFilter | undefined;
}
