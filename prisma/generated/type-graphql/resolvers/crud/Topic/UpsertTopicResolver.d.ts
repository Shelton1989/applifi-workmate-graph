import { GraphQLResolveInfo } from "graphql";
import { UpsertTopicArgs } from "./args/UpsertTopicArgs";
import { Topic } from "../../../models/Topic";
export declare class UpsertTopicResolver {
    upsertTopic(ctx: any, info: GraphQLResolveInfo, args: UpsertTopicArgs): Promise<Topic>;
}
