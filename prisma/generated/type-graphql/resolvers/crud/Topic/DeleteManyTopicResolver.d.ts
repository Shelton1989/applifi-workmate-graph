import { GraphQLResolveInfo } from "graphql";
import { DeleteManyTopicArgs } from "./args/DeleteManyTopicArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyTopicResolver {
    deleteManyTopic(ctx: any, info: GraphQLResolveInfo, args: DeleteManyTopicArgs): Promise<AffectedRowsOutput>;
}
