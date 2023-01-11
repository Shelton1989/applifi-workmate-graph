import { GraphQLResolveInfo } from "graphql";
import { CreateManyExperienceAvailabilityArgs } from "./args/CreateManyExperienceAvailabilityArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyExperienceAvailabilityResolver {
    createManyExperienceAvailability(ctx: any, info: GraphQLResolveInfo, args: CreateManyExperienceAvailabilityArgs): Promise<AffectedRowsOutput>;
}
