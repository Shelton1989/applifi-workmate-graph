import { GraphQLResolveInfo } from "graphql";
import { GroupByProductKeyArgs } from "./args/GroupByProductKeyArgs";
import { ProductKeyGroupBy } from "../../outputs/ProductKeyGroupBy";
export declare class GroupByProductKeyResolver {
    groupByProductKey(ctx: any, info: GraphQLResolveInfo, args: GroupByProductKeyArgs): Promise<ProductKeyGroupBy[]>;
}
