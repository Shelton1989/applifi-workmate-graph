import { GraphQLResolveInfo } from "graphql";
import { GroupByRequestArgs } from "./args/GroupByRequestArgs";
import { RequestGroupBy } from "../../outputs/RequestGroupBy";
export declare class GroupByRequestResolver {
    groupByRequest(ctx: any, info: GraphQLResolveInfo, args: GroupByRequestArgs): Promise<RequestGroupBy[]>;
}
