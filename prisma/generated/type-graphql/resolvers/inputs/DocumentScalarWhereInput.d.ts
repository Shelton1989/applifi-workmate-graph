import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumPUBLISH_STATUSFilter } from "../inputs/EnumPUBLISH_STATUSFilter";
import { StringFilter } from "../inputs/StringFilter";
export declare class DocumentScalarWhereInput {
    AND?: DocumentScalarWhereInput[] | undefined;
    OR?: DocumentScalarWhereInput[] | undefined;
    NOT?: DocumentScalarWhereInput[] | undefined;
    id?: StringFilter | undefined;
    publishStatus?: EnumPUBLISH_STATUSFilter | undefined;
    title?: StringFilter | undefined;
    shortDescription?: StringFilter | undefined;
    tenantId?: StringFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
