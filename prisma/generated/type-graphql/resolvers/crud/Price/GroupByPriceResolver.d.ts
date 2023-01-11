import { GraphQLResolveInfo } from "graphql";
import { GroupByPriceArgs } from "./args/GroupByPriceArgs";
import { PriceGroupBy } from "../../outputs/PriceGroupBy";
export declare class GroupByPriceResolver {
    groupByPrice(ctx: any, info: GraphQLResolveInfo, args: GroupByPriceArgs): Promise<PriceGroupBy[]>;
}
