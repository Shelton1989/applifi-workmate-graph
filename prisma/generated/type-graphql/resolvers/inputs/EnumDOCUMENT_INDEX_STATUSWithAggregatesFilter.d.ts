import { NestedEnumDOCUMENT_INDEX_STATUSFilter } from "../inputs/NestedEnumDOCUMENT_INDEX_STATUSFilter";
import { NestedEnumDOCUMENT_INDEX_STATUSWithAggregatesFilter } from "../inputs/NestedEnumDOCUMENT_INDEX_STATUSWithAggregatesFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class EnumDOCUMENT_INDEX_STATUSWithAggregatesFilter {
    equals?: "INDEXED" | "NOT_INDEXED" | "INDEXING" | "INDEXING_FAILED" | "INDEXING_FAILED_LIMIT_REACHED" | "INDEXING_FAILED_DOCUMENT_INACCESSIBLE" | undefined;
    in?: Array<"INDEXED" | "NOT_INDEXED" | "INDEXING" | "INDEXING_FAILED" | "INDEXING_FAILED_LIMIT_REACHED" | "INDEXING_FAILED_DOCUMENT_INACCESSIBLE"> | undefined;
    notIn?: Array<"INDEXED" | "NOT_INDEXED" | "INDEXING" | "INDEXING_FAILED" | "INDEXING_FAILED_LIMIT_REACHED" | "INDEXING_FAILED_DOCUMENT_INACCESSIBLE"> | undefined;
    not?: NestedEnumDOCUMENT_INDEX_STATUSWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumDOCUMENT_INDEX_STATUSFilter | undefined;
    _max?: NestedEnumDOCUMENT_INDEX_STATUSFilter | undefined;
}
