import { GraphQLResolveInfo } from "graphql";
import { CreateTopicListsArgs } from "./args/CreateTopicListsArgs";
import { TopicLists } from "../../../models/TopicLists";
export declare class CreateTopicListsResolver {
    createTopicLists(ctx: any, info: GraphQLResolveInfo, args: CreateTopicListsArgs): Promise<TopicLists>;
}
