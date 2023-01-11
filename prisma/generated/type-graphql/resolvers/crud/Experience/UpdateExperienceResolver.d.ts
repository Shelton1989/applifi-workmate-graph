import { GraphQLResolveInfo } from "graphql";
import { UpdateExperienceArgs } from "./args/UpdateExperienceArgs";
import { Experience } from "../../../models/Experience";
export declare class UpdateExperienceResolver {
    updateExperience(ctx: any, info: GraphQLResolveInfo, args: UpdateExperienceArgs): Promise<Experience | null>;
}
