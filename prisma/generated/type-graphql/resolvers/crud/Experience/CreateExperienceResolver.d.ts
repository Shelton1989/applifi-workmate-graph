import { GraphQLResolveInfo } from "graphql";
import { CreateExperienceArgs } from "./args/CreateExperienceArgs";
import { Experience } from "../../../models/Experience";
export declare class CreateExperienceResolver {
    createExperience(ctx: any, info: GraphQLResolveInfo, args: CreateExperienceArgs): Promise<Experience>;
}
