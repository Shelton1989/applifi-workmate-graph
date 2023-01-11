import { GraphQLResolveInfo } from "graphql";
import { FindManyExperienceArgs } from "./args/FindManyExperienceArgs";
import { Experience } from "../../../models/Experience";
export declare class FindManyExperienceResolver {
    experiences(ctx: any, info: GraphQLResolveInfo, args: FindManyExperienceArgs): Promise<Experience[]>;
}
