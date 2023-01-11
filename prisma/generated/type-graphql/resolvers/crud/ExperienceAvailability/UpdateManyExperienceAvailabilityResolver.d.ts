import { GraphQLResolveInfo } from "graphql";
import { UpdateManyExperienceAvailabilityArgs } from "./args/UpdateManyExperienceAvailabilityArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyExperienceAvailabilityResolver {
    updateManyExperienceAvailability(ctx: any, info: GraphQLResolveInfo, args: UpdateManyExperienceAvailabilityArgs): Promise<AffectedRowsOutput>;
}
