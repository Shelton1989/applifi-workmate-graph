import { GraphQLResolveInfo } from "graphql";
import { AggregateMealAvailabilityArgs } from "./args/AggregateMealAvailabilityArgs";
import { AggregateMealAvailability } from "../../outputs/AggregateMealAvailability";
export declare class AggregateMealAvailabilityResolver {
    aggregateMealAvailability(ctx: any, info: GraphQLResolveInfo, args: AggregateMealAvailabilityArgs): Promise<AggregateMealAvailability>;
}
