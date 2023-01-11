import { GraphQLResolveInfo } from "graphql";
import { UpdateManyExperienceArgs } from "./args/UpdateManyExperienceArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyExperienceResolver {
    updateManyExperience(ctx: any, info: GraphQLResolveInfo, args: UpdateManyExperienceArgs): Promise<AffectedRowsOutput>;
}
