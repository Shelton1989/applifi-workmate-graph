import { GraphQLResolveInfo } from "graphql";
import { CreateManyMealAvailabilityArgs } from "./args/CreateManyMealAvailabilityArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyMealAvailabilityResolver {
    createManyMealAvailability(ctx: any, info: GraphQLResolveInfo, args: CreateManyMealAvailabilityArgs): Promise<AffectedRowsOutput>;
}
