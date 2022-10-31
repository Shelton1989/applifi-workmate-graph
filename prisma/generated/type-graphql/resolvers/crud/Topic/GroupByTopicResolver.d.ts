import { GraphQLResolveInfo } from "graphql";
import { GroupByTopicArgs } from "./args/GroupByTopicArgs";
import { TopicGroupBy } from "../../outputs/TopicGroupBy";
export declare class GroupByTopicResolver {
    groupByTopic(ctx: any, info: GraphQLResolveInfo, args: GroupByTopicArgs): Promise<TopicGroupBy[]>;
}
