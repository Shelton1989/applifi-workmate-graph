import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumDOCUMENT_INDEX_STATUSFilter } from "../inputs/EnumDOCUMENT_INDEX_STATUSFilter";
import { EnumPUBLISH_STATUSFilter } from "../inputs/EnumPUBLISH_STATUSFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
export declare class DocumentScalarWhereInput {
    AND?: DocumentScalarWhereInput[] | undefined;
    OR?: DocumentScalarWhereInput[] | undefined;
    NOT?: DocumentScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    publishStatus?: EnumPUBLISH_STATUSFilter | undefined;
    indexStatus?: EnumDOCUMENT_INDEX_STATUSFilter | undefined;
    title?: StringFilter | undefined;
    link?: StringNullableFilter | undefined;
    url?: StringNullableFilter | undefined;
    source?: StringNullableFilter | undefined;
    shortDescription?: StringNullableFilter | undefined;
    documentType?: StringNullableFilter | undefined;
    tenantId?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
