import { GraphQLResolveInfo } from "graphql";
import { UpsertTopicListsArgs } from "./args/UpsertTopicListsArgs";
import { TopicLists } from "../../../models/TopicLists";
export declare class UpsertTopicListsResolver {
    upsertTopicLists(ctx: any, info: GraphQLResolveInfo, args: UpsertTopicListsArgs): Promise<TopicLists>;
}
