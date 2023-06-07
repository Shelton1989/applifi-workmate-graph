import { DocumentCountOrderByAggregateInput } from "../inputs/DocumentCountOrderByAggregateInput";
import { DocumentMaxOrderByAggregateInput } from "../inputs/DocumentMaxOrderByAggregateInput";
import { DocumentMinOrderByAggregateInput } from "../inputs/DocumentMinOrderByAggregateInput";
export declare class DocumentOrderByWithAggregationInput {
    id?: "asc" | "desc" | undefined;
    publishStatus?: "asc" | "desc" | undefined;
    indexStatus?: "asc" | "desc" | undefined;
    title?: "asc" | "desc" | undefined;
    link?: "asc" | "desc" | undefined;
    url?: "asc" | "desc" | undefined;
    source?: "asc" | "desc" | undefined;
    shortDescription?: "asc" | "desc" | undefined;
    documentType?: "asc" | "desc" | undefined;
    tenantId?: "asc" | "desc" | undefined;
    createdAt?: "asc" | "desc" | undefined;
    updatedAt?: "asc" | "desc" | undefined;
    _count?: DocumentCountOrderByAggregateInput | undefined;
    _max?: DocumentMaxOrderByAggregateInput | undefined;
    _min?: DocumentMinOrderByAggregateInput | undefined;
}
