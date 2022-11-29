import { GraphQLResolveInfo } from "graphql";
import { DeleteTopicListsArgs } from "./args/DeleteTopicListsArgs";
import { TopicLists } from "../../../models/TopicLists";
export declare class DeleteTopicListsResolver {
    deleteTopicLists(ctx: any, info: GraphQLResolveInfo, args: DeleteTopicListsArgs): Promise<TopicLists | null>;
}
