import { NestedEnumTOPIC_TYPEFilter } from "../inputs/NestedEnumTOPIC_TYPEFilter";
export declare class EnumTOPIC_TYPEFilter {
    equals?: "MOVIE" | "SERIES" | "DOCUMENTARY" | "STREAMING_PLATFORM" | "OPINION_PIECE" | "NEWS_ENTITY" | "ARTICLE" | "PODCAST" | "BOOK" | undefined;
    in?: Array<"MOVIE" | "SERIES" | "DOCUMENTARY" | "STREAMING_PLATFORM" | "OPINION_PIECE" | "NEWS_ENTITY" | "ARTICLE" | "PODCAST" | "BOOK"> | undefined;
    notIn?: Array<"MOVIE" | "SERIES" | "DOCUMENTARY" | "STREAMING_PLATFORM" | "OPINION_PIECE" | "NEWS_ENTITY" | "ARTICLE" | "PODCAST" | "BOOK"> | undefined;
    not?: NestedEnumTOPIC_TYPEFilter | undefined;
}
