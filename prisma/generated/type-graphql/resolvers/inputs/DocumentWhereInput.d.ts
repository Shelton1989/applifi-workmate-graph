import { CommentListRelationFilter } from "../inputs/CommentListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { EnumPUBLISH_STATUSFilter } from "../inputs/EnumPUBLISH_STATUSFilter";
import { StringFilter } from "../inputs/StringFilter";
import { TenantRelationFilter } from "../inputs/TenantRelationFilter";
export declare class DocumentWhereInput {
    AND?: DocumentWhereInput[] | undefined;
    OR?: DocumentWhereInput[] | undefined;
    NOT?: DocumentWhereInput[] | undefined;
    id?: StringFilter | undefined;
    publishStatus?: EnumPUBLISH_STATUSFilter | undefined;
    title?: StringFilter | undefined;
    shortDescription?: StringFilter | undefined;
    Tenant?: TenantRelationFilter | undefined;
    tenantId?: StringFilter | undefined;
    Comments?: CommentListRelationFilter | undefined;
    createdAt?: DateTimeFilter | undefined;
    updatedAt?: DateTimeFilter | undefined;
}
