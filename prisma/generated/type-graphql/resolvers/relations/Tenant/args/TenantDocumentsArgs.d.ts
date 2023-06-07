import { DocumentOrderByWithRelationInput } from "../../../inputs/DocumentOrderByWithRelationInput";
import { DocumentWhereInput } from "../../../inputs/DocumentWhereInput";
import { DocumentWhereUniqueInput } from "../../../inputs/DocumentWhereUniqueInput";
export declare class TenantDocumentsArgs {
    where?: DocumentWhereInput | undefined;
    orderBy?: DocumentOrderByWithRelationInput[] | undefined;
    cursor?: DocumentWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "publishStatus" | "indexStatus" | "title" | "link" | "url" | "source" | "shortDescription" | "documentType" | "tenantId" | "createdAt" | "updatedAt"> | undefined;
}
