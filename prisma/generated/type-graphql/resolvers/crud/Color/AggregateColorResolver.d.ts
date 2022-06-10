import { GraphQLResolveInfo } from "graphql";
import { AggregateColorArgs } from "./args/AggregateColorArgs";
import { AggregateColor } from "../../outputs/AggregateColor";
export declare class AggregateColorResolver {
    aggregateColor(ctx: any, info: GraphQLResolveInfo, args: AggregateColorArgs): Promise<AggregateColor>;
}
