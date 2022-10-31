import { GraphQLResolveInfo } from "graphql";
import { FindFirstTopicArgs } from "./args/FindFirstTopicArgs";
import { Topic } from "../../../models/Topic";
export declare class FindFirstTopicResolver {
    findFirstTopic(ctx: any, info: GraphQLResolveInfo, args: FindFirstTopicArgs): Promise<Topic | null>;
}
