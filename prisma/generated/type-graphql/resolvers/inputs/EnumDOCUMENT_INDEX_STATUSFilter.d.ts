import { NestedEnumDOCUMENT_INDEX_STATUSFilter } from "../inputs/NestedEnumDOCUMENT_INDEX_STATUSFilter";
export declare class EnumDOCUMENT_INDEX_STATUSFilter {
    equals?: "INDEXED" | "NOT_INDEXED" | "INDEXING" | "INDEXING_FAILED" | undefined;
    in?: Array<"INDEXED" | "NOT_INDEXED" | "INDEXING" | "INDEXING_FAILED"> | undefined;
    notIn?: Array<"INDEXED" | "NOT_INDEXED" | "INDEXING" | "INDEXING_FAILED"> | undefined;
    not?: NestedEnumDOCUMENT_INDEX_STATUSFilter | undefined;
}
