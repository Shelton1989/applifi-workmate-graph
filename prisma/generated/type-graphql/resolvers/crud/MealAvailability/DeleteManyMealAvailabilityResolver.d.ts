import { GraphQLResolveInfo } from "graphql";
import { DeleteManyMealAvailabilityArgs } from "./args/DeleteManyMealAvailabilityArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyMealAvailabilityResolver {
    deleteManyMealAvailability(ctx: any, info: GraphQLResolveInfo, args: DeleteManyMealAvailabilityArgs): Promise<AffectedRowsOutput>;
}
