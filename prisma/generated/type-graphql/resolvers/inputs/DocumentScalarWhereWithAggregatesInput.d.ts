import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumDOCUMENT_INDEX_STATUSWithAggregatesFilter } from "../inputs/EnumDOCUMENT_INDEX_STATUSWithAggregatesFilter";
import { EnumPUBLISH_STATUSWithAggregatesFilter } from "../inputs/EnumPUBLISH_STATUSWithAggregatesFilter";
import { StringNullableWithAggregatesFilter } from "../inputs/StringNullableWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class DocumentScalarWhereWithAggregatesInput {
    AND?: DocumentScalarWhereWithAggregatesInput[] | undefined;
    OR?: DocumentScalarWhereWithAggregatesInput[] | undefined;
    NOT?: DocumentScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    publishStatus?: EnumPUBLISH_STATUSWithAggregatesFilter | undefined;
    indexStatus?: EnumDOCUMENT_INDEX_STATUSWithAggregatesFilter | undefined;
    title?: StringWithAggregatesFilter | undefined;
    link?: StringNullableWithAggregatesFilter | undefined;
    url?: StringNullableWithAggregatesFilter | undefined;
    source?: StringNullableWithAggregatesFilter | undefined;
    shortDescription?: StringNullableWithAggregatesFilter | undefined;
    tenantId?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
