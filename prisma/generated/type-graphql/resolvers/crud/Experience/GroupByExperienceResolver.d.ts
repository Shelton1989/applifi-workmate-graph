import { GraphQLResolveInfo } from "graphql";
import { GroupByExperienceArgs } from "./args/GroupByExperienceArgs";
import { ExperienceGroupBy } from "../../outputs/ExperienceGroupBy";
export declare class GroupByExperienceResolver {
    groupByExperience(ctx: any, info: GraphQLResolveInfo, args: GroupByExperienceArgs): Promise<ExperienceGroupBy[]>;
}
