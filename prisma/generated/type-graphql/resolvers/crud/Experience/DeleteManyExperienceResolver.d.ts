import { GraphQLResolveInfo } from "graphql";
import { DeleteManyExperienceArgs } from "./args/DeleteManyExperienceArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyExperienceResolver {
    deleteManyExperience(ctx: any, info: GraphQLResolveInfo, args: DeleteManyExperienceArgs): Promise<AffectedRowsOutput>;
}
