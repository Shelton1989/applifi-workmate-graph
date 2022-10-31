import { NestedEnumTOPIC_TYPEFilter } from "../inputs/NestedEnumTOPIC_TYPEFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class NestedEnumTOPIC_TYPEWithAggregatesFilter {
    equals?: "MOVIE" | "SERIES" | "DOCUMENTARY" | "STREAMING_PLATFORM" | "OPINION_PIECE" | "NEWS_ENTITY" | "ARTICLE" | "PODCAST" | "BOOK" | undefined;
    in?: Array<"MOVIE" | "SERIES" | "DOCUMENTARY" | "STREAMING_PLATFORM" | "OPINION_PIECE" | "NEWS_ENTITY" | "ARTICLE" | "PODCAST" | "BOOK"> | undefined;
    notIn?: Array<"MOVIE" | "SERIES" | "DOCUMENTARY" | "STREAMING_PLATFORM" | "OPINION_PIECE" | "NEWS_ENTITY" | "ARTICLE" | "PODCAST" | "BOOK"> | undefined;
    not?: NestedEnumTOPIC_TYPEWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumTOPIC_TYPEFilter | undefined;
    _max?: NestedEnumTOPIC_TYPEFilter | undefined;
}
