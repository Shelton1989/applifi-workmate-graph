import { GraphQLResolveInfo } from "graphql";
import { GroupByFeaturesArgs } from "./args/GroupByFeaturesArgs";
import { FeaturesGroupBy } from "../../outputs/FeaturesGroupBy";
export declare class GroupByFeaturesResolver {
    groupByFeatures(ctx: any, info: GraphQLResolveInfo, args: GroupByFeaturesArgs): Promise<FeaturesGroupBy[]>;
}
