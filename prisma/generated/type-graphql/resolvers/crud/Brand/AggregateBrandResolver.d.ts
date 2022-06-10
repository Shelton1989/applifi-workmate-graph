import { GraphQLResolveInfo } from "graphql";
import { AggregateBrandArgs } from "./args/AggregateBrandArgs";
import { AggregateBrand } from "../../outputs/AggregateBrand";
export declare class AggregateBrandResolver {
    aggregateBrand(ctx: any, info: GraphQLResolveInfo, args: AggregateBrandArgs): Promise<AggregateBrand>;
}
