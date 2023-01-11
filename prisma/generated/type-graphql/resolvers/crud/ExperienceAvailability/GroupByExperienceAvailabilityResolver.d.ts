import { GraphQLResolveInfo } from "graphql";
import { GroupByExperienceAvailabilityArgs } from "./args/GroupByExperienceAvailabilityArgs";
import { ExperienceAvailabilityGroupBy } from "../../outputs/ExperienceAvailabilityGroupBy";
export declare class GroupByExperienceAvailabilityResolver {
    groupByExperienceAvailability(ctx: any, info: GraphQLResolveInfo, args: GroupByExperienceAvailabilityArgs): Promise<ExperienceAvailabilityGroupBy[]>;
}
