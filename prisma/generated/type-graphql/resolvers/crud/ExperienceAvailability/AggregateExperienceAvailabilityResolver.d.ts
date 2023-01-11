import { GraphQLResolveInfo } from "graphql";
import { AggregateExperienceAvailabilityArgs } from "./args/AggregateExperienceAvailabilityArgs";
import { AggregateExperienceAvailability } from "../../outputs/AggregateExperienceAvailability";
export declare class AggregateExperienceAvailabilityResolver {
    aggregateExperienceAvailability(ctx: any, info: GraphQLResolveInfo, args: AggregateExperienceAvailabilityArgs): Promise<AggregateExperienceAvailability>;
}
