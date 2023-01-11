import { GraphQLResolveInfo } from "graphql";
import { DeleteManyExperienceAvailabilityArgs } from "./args/DeleteManyExperienceAvailabilityArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyExperienceAvailabilityResolver {
    deleteManyExperienceAvailability(ctx: any, info: GraphQLResolveInfo, args: DeleteManyExperienceAvailabilityArgs): Promise<AffectedRowsOutput>;
}
