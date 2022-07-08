import { NestedEnumREQUEST_TYPEFilter } from "../inputs/NestedEnumREQUEST_TYPEFilter";
export declare class EnumREQUEST_TYPEFilter {
    equals?: "CASH_WITHDRAWAL" | "POST_REVIEW" | "COMMENT_REVIEW" | "PROFILE_REVIEW" | "ARTIST_ACCESS" | "HELP_REQUEST" | undefined;
    in?: Array<"CASH_WITHDRAWAL" | "POST_REVIEW" | "COMMENT_REVIEW" | "PROFILE_REVIEW" | "ARTIST_ACCESS" | "HELP_REQUEST"> | undefined;
    notIn?: Array<"CASH_WITHDRAWAL" | "POST_REVIEW" | "COMMENT_REVIEW" | "PROFILE_REVIEW" | "ARTIST_ACCESS" | "HELP_REQUEST"> | undefined;
    not?: NestedEnumREQUEST_TYPEFilter | undefined;
}
