import { GraphQLResolveInfo } from "graphql";
import { GroupByBrandProductArgs } from "./args/GroupByBrandProductArgs";
import { BrandProductGroupBy } from "../../outputs/BrandProductGroupBy";
export declare class GroupByBrandProductResolver {
    groupByBrandProduct(ctx: any, info: GraphQLResolveInfo, args: GroupByBrandProductArgs): Promise<BrandProductGroupBy[]>;
}
