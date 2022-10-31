import { GraphQLResolveInfo } from "graphql";
import { FindUniqueTopicArgs } from "./args/FindUniqueTopicArgs";
import { Topic } from "../../../models/Topic";
export declare class FindUniqueTopicResolver {
    topic(ctx: any, info: GraphQLResolveInfo, args: FindUniqueTopicArgs): Promise<Topic | null>;
}
