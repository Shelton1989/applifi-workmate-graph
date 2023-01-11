import { GraphQLResolveInfo } from "graphql";
import { FindUniqueExperienceArgs } from "./args/FindUniqueExperienceArgs";
import { Experience } from "../../../models/Experience";
export declare class FindUniqueExperienceResolver {
    experience(ctx: any, info: GraphQLResolveInfo, args: FindUniqueExperienceArgs): Promise<Experience | null>;
}
