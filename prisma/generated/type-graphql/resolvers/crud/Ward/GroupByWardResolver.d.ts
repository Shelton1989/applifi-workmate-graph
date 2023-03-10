import { GraphQLResolveInfo } from "graphql";
import { GroupByWardArgs } from "./args/GroupByWardArgs";
import { WardGroupBy } from "../../outputs/WardGroupBy";
export declare class GroupByWardResolver {
    groupByWard(ctx: any, info: GraphQLResolveInfo, args: GroupByWardArgs): Promise<WardGroupBy[]>;
}
