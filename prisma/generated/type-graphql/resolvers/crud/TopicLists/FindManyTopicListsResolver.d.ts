import { GraphQLResolveInfo } from "graphql";
import { FindManyTopicListsArgs } from "./args/FindManyTopicListsArgs";
import { TopicLists } from "../../../models/TopicLists";
export declare class FindManyTopicListsResolver {
    findManyTopicLists(ctx: any, info: GraphQLResolveInfo, args: FindManyTopicListsArgs): Promise<TopicLists[]>;
}
