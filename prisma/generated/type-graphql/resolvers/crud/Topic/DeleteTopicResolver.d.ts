import { GraphQLResolveInfo } from "graphql";
import { DeleteTopicArgs } from "./args/DeleteTopicArgs";
import { Topic } from "../../../models/Topic";
export declare class DeleteTopicResolver {
    deleteTopic(ctx: any, info: GraphQLResolveInfo, args: DeleteTopicArgs): Promise<Topic | null>;
}
