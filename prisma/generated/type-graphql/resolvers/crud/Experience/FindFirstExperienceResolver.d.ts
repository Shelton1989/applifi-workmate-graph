import { GraphQLResolveInfo } from "graphql";
import { FindFirstExperienceArgs } from "./args/FindFirstExperienceArgs";
import { Experience } from "../../../models/Experience";
export declare class FindFirstExperienceResolver {
    findFirstExperience(ctx: any, info: GraphQLResolveInfo, args: FindFirstExperienceArgs): Promise<Experience | null>;
}
