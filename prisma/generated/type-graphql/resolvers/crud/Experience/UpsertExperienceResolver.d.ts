import { GraphQLResolveInfo } from "graphql";
import { UpsertExperienceArgs } from "./args/UpsertExperienceArgs";
import { Experience } from "../../../models/Experience";
export declare class UpsertExperienceResolver {
    upsertExperience(ctx: any, info: GraphQLResolveInfo, args: UpsertExperienceArgs): Promise<Experience>;
}
