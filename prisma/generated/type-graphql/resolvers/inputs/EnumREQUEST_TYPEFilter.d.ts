import { NestedEnumREQUEST_TYPEFilter } from "../inputs/NestedEnumREQUEST_TYPEFilter";
export declare class EnumREQUEST_TYPEFilter {
    equals?: "POST_REVIEW" | "COMMENT_REVIEW" | "PROFILE_REVIEW" | "HIGHER_ACCESS" | "HELP_REQUEST" | undefined;
    in?: Array<"POST_REVIEW" | "COMMENT_REVIEW" | "PROFILE_REVIEW" | "HIGHER_ACCESS" | "HELP_REQUEST"> | undefined;
    notIn?: Array<"POST_REVIEW" | "COMMENT_REVIEW" | "PROFILE_REVIEW" | "HIGHER_ACCESS" | "HELP_REQUEST"> | undefined;
    not?: NestedEnumREQUEST_TYPEFilter | undefined;
}
