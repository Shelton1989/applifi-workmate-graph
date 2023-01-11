import { GraphQLResolveInfo } from "graphql";
import { CreateManyExperienceArgs } from "./args/CreateManyExperienceArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyExperienceResolver {
    createManyExperience(ctx: any, info: GraphQLResolveInfo, args: CreateManyExperienceArgs): Promise<AffectedRowsOutput>;
}
