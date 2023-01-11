import { GraphQLResolveInfo } from "graphql";
import { AggregateCurrencyArgs } from "./args/AggregateCurrencyArgs";
import { AggregateCurrency } from "../../outputs/AggregateCurrency";
export declare class AggregateCurrencyResolver {
    aggregateCurrency(ctx: any, info: GraphQLResolveInfo, args: AggregateCurrencyArgs): Promise<AggregateCurrency>;
}
