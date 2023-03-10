import { GraphQLResolveInfo } from "graphql";
import { UpdateManyMealAvailabilityArgs } from "./args/UpdateManyMealAvailabilityArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyMealAvailabilityResolver {
    updateManyMealAvailability(ctx: any, info: GraphQLResolveInfo, args: UpdateManyMealAvailabilityArgs): Promise<AffectedRowsOutput>;
}
