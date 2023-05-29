import { GraphQLResolveInfo } from "graphql";
import { GroupByQueryArgs } from "./args/GroupByQueryArgs";
import { QueryGroupBy } from "../../outputs/QueryGroupBy";
export declare class GroupByQueryResolver {
    groupByQuery(ctx: any, info: GraphQLResolveInfo, args: GroupByQueryArgs): Promise<QueryGroupBy[]>;
}
