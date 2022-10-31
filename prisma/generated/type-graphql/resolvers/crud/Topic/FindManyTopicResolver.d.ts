import { GraphQLResolveInfo } from "graphql";
import { FindManyTopicArgs } from "./args/FindManyTopicArgs";
import { Topic } from "../../../models/Topic";
export declare class FindManyTopicResolver {
    topics(ctx: any, info: GraphQLResolveInfo, args: FindManyTopicArgs): Promise<Topic[]>;
}
