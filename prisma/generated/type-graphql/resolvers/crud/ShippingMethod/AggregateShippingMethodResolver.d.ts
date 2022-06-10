import { GraphQLResolveInfo } from "graphql";
import { AggregateShippingMethodArgs } from "./args/AggregateShippingMethodArgs";
import { AggregateShippingMethod } from "../../outputs/AggregateShippingMethod";
export declare class AggregateShippingMethodResolver {
    aggregateShippingMethod(ctx: any, info: GraphQLResolveInfo, args: AggregateShippingMethodArgs): Promise<AggregateShippingMethod>;
}
