import { GraphQLResolveInfo } from "graphql";
import { GroupByBrandArgs } from "./args/GroupByBrandArgs";
import { BrandGroupBy } from "../../outputs/BrandGroupBy";
export declare class GroupByBrandResolver {
    groupByBrand(ctx: any, info: GraphQLResolveInfo, args: GroupByBrandArgs): Promise<BrandGroupBy[]>;
}
