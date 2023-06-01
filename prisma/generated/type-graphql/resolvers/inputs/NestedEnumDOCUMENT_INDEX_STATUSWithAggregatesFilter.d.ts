import { NestedEnumDOCUMENT_INDEX_STATUSFilter } from "../inputs/NestedEnumDOCUMENT_INDEX_STATUSFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class NestedEnumDOCUMENT_INDEX_STATUSWithAggregatesFilter {
    equals?: "INDEXED" | "NOT_INDEXED" | "INDEXING" | "INDEXING_FAILED" | undefined;
    in?: Array<"INDEXED" | "NOT_INDEXED" | "INDEXING" | "INDEXING_FAILED"> | undefined;
    notIn?: Array<"INDEXED" | "NOT_INDEXED" | "INDEXING" | "INDEXING_FAILED"> | undefined;
    not?: NestedEnumDOCUMENT_INDEX_STATUSWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumDOCUMENT_INDEX_STATUSFilter | undefined;
    _max?: NestedEnumDOCUMENT_INDEX_STATUSFilter | undefined;
}
