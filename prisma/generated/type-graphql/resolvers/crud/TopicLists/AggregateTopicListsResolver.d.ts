import { GraphQLResolveInfo } from "graphql";
import { AggregateTopicListsArgs } from "./args/AggregateTopicListsArgs";
import { AggregateTopicLists } from "../../outputs/AggregateTopicLists";
export declare class AggregateTopicListsResolver {
    aggregateTopicLists(ctx: any, info: GraphQLResolveInfo, args: AggregateTopicListsArgs): Promise<AggregateTopicLists>;
}
