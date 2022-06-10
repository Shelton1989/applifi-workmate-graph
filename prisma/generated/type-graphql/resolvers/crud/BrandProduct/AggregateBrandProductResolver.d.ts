import { GraphQLResolveInfo } from "graphql";
import { AggregateBrandProductArgs } from "./args/AggregateBrandProductArgs";
import { AggregateBrandProduct } from "../../outputs/AggregateBrandProduct";
export declare class AggregateBrandProductResolver {
    aggregateBrandProduct(ctx: any, info: GraphQLResolveInfo, args: AggregateBrandProductArgs): Promise<AggregateBrandProduct>;
}
