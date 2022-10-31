import { NestedEnumREQUEST_TYPEFilter } from "../inputs/NestedEnumREQUEST_TYPEFilter";
import { NestedIntFilter } from "../inputs/NestedIntFilter";
export declare class NestedEnumREQUEST_TYPEWithAggregatesFilter {
    equals?: "POST_REVIEW" | "COMMENT_REVIEW" | "PROFILE_REVIEW" | "ARTIST_ACCESS" | "HELP_REQUEST" | undefined;
    in?: Array<"POST_REVIEW" | "COMMENT_REVIEW" | "PROFILE_REVIEW" | "ARTIST_ACCESS" | "HELP_REQUEST"> | undefined;
    notIn?: Array<"POST_REVIEW" | "COMMENT_REVIEW" | "PROFILE_REVIEW" | "ARTIST_ACCESS" | "HELP_REQUEST"> | undefined;
    not?: NestedEnumREQUEST_TYPEWithAggregatesFilter | undefined;
    _count?: NestedIntFilter | undefined;
    _min?: NestedEnumREQUEST_TYPEFilter | undefined;
    _max?: NestedEnumREQUEST_TYPEFilter | undefined;
}
