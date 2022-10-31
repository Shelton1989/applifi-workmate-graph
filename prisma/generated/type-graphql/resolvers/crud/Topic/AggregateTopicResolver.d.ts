import { GraphQLResolveInfo } from "graphql";
import { AggregateTopicArgs } from "./args/AggregateTopicArgs";
import { AggregateTopic } from "../../outputs/AggregateTopic";
export declare class AggregateTopicResolver {
    aggregateTopic(ctx: any, info: GraphQLResolveInfo, args: AggregateTopicArgs): Promise<AggregateTopic>;
}
