import { DocumentOrderByWithAggregationInput } from "../../../inputs/DocumentOrderByWithAggregationInput";
import { DocumentScalarWhereWithAggregatesInput } from "../../../inputs/DocumentScalarWhereWithAggregatesInput";
import { DocumentWhereInput } from "../../../inputs/DocumentWhereInput";
export declare class GroupByDocumentArgs {
    where?: DocumentWhereInput | undefined;
    orderBy?: DocumentOrderByWithAggregationInput[] | undefined;
    by: Array<"id" | "publishStatus" | "indexStatus" | "title" | "link" | "url" | "source" | "shortDescription" | "documentType" | "tenantId" | "createdAt" | "updatedAt">;
    having?: DocumentScalarWhereWithAggregatesInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
}
