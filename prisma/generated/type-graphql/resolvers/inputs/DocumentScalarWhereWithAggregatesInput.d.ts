import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { EnumPUBLISH_STATUSWithAggregatesFilter } from "../inputs/EnumPUBLISH_STATUSWithAggregatesFilter";
import { StringWithAggregatesFilter } from "../inputs/StringWithAggregatesFilter";
export declare class DocumentScalarWhereWithAggregatesInput {
    AND?: DocumentScalarWhereWithAggregatesInput[] | undefined;
    OR?: DocumentScalarWhereWithAggregatesInput[] | undefined;
    NOT?: DocumentScalarWhereWithAggregatesInput[] | undefined;
    id?: StringWithAggregatesFilter | undefined;
    publishStatus?: EnumPUBLISH_STATUSWithAggregatesFilter | undefined;
    title?: StringWithAggregatesFilter | undefined;
    shortDescription?: StringWithAggregatesFilter | undefined;
    tenantId?: StringWithAggregatesFilter | undefined;
    createdAt?: DateTimeWithAggregatesFilter | undefined;
    updatedAt?: DateTimeWithAggregatesFilter | undefined;
}
