import { GraphQLResolveInfo } from "graphql";
import { FindUniqueTopicListsArgs } from "./args/FindUniqueTopicListsArgs";
import { TopicLists } from "../../../models/TopicLists";
export declare class FindUniqueTopicListsResolver {
    findUniqueTopicLists(ctx: any, info: GraphQLResolveInfo, args: FindUniqueTopicListsArgs): Promise<TopicLists | null>;
}
