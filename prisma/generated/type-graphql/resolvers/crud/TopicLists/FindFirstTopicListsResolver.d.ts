import { GraphQLResolveInfo } from "graphql";
import { FindFirstTopicListsArgs } from "./args/FindFirstTopicListsArgs";
import { TopicLists } from "../../../models/TopicLists";
export declare class FindFirstTopicListsResolver {
    findFirstTopicLists(ctx: any, info: GraphQLResolveInfo, args: FindFirstTopicListsArgs): Promise<TopicLists | null>;
}
