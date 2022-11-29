import { GraphQLResolveInfo } from "graphql";
import { GroupByTopicListsArgs } from "./args/GroupByTopicListsArgs";
import { TopicListsGroupBy } from "../../outputs/TopicListsGroupBy";
export declare class GroupByTopicListsResolver {
    groupByTopicLists(ctx: any, info: GraphQLResolveInfo, args: GroupByTopicListsArgs): Promise<TopicListsGroupBy[]>;
}
