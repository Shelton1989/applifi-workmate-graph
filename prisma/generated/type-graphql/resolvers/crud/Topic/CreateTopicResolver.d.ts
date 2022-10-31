import { GraphQLResolveInfo } from "graphql";
import { CreateTopicArgs } from "./args/CreateTopicArgs";
import { Topic } from "../../../models/Topic";
export declare class CreateTopicResolver {
    createTopic(ctx: any, info: GraphQLResolveInfo, args: CreateTopicArgs): Promise<Topic>;
}
