import { GraphQLResolveInfo } from "graphql";
import { UpdateTopicArgs } from "./args/UpdateTopicArgs";
import { Topic } from "../../../models/Topic";
export declare class UpdateTopicResolver {
    updateTopic(ctx: any, info: GraphQLResolveInfo, args: UpdateTopicArgs): Promise<Topic | null>;
}
