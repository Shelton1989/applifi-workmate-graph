import { GraphQLResolveInfo } from "graphql";
import { AggregateExperienceArgs } from "./args/AggregateExperienceArgs";
import { AggregateExperience } from "../../outputs/AggregateExperience";
export declare class AggregateExperienceResolver {
    aggregateExperience(ctx: any, info: GraphQLResolveInfo, args: AggregateExperienceArgs): Promise<AggregateExperience>;
}
