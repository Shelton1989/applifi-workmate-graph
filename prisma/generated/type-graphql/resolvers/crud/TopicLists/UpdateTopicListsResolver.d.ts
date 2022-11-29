import { GraphQLResolveInfo } from "graphql";
import { UpdateTopicListsArgs } from "./args/UpdateTopicListsArgs";
import { TopicLists } from "../../../models/TopicLists";
export declare class UpdateTopicListsResolver {
    updateTopicLists(ctx: any, info: GraphQLResolveInfo, args: UpdateTopicListsArgs): Promise<TopicLists | null>;
}
