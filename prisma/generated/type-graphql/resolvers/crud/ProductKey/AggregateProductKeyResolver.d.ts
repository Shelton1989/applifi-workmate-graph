import { GraphQLResolveInfo } from "graphql";
import { AggregateProductKeyArgs } from "./args/AggregateProductKeyArgs";
import { AggregateProductKey } from "../../outputs/AggregateProductKey";
export declare class AggregateProductKeyResolver {
    aggregateProductKey(ctx: any, info: GraphQLResolveInfo, args: AggregateProductKeyArgs): Promise<AggregateProductKey>;
}
