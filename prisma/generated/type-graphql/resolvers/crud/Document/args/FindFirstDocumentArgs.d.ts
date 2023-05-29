import { DocumentOrderByWithRelationInput } from "../../../inputs/DocumentOrderByWithRelationInput";
import { DocumentWhereInput } from "../../../inputs/DocumentWhereInput";
import { DocumentWhereUniqueInput } from "../../../inputs/DocumentWhereUniqueInput";
export declare class FindFirstDocumentArgs {
    where?: DocumentWhereInput | undefined;
    orderBy?: DocumentOrderByWithRelationInput[] | undefined;
    cursor?: DocumentWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "publishStatus" | "title" | "shortDescription" | "tenantId" | "createdAt" | "updatedAt"> | undefined;
}
