import { GraphQLResolveInfo } from "graphql";
import { DeleteExperienceArgs } from "./args/DeleteExperienceArgs";
import { Experience } from "../../../models/Experience";
export declare class DeleteExperienceResolver {
    deleteExperience(ctx: any, info: GraphQLResolveInfo, args: DeleteExperienceArgs): Promise<Experience | null>;
}
