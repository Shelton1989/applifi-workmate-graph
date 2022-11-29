import { GraphQLResolveInfo } from "graphql";
import { DeleteManyTopicListsArgs } from "./args/DeleteManyTopicListsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class DeleteManyTopicListsResolver {
    deleteManyTopicLists(ctx: any, info: GraphQLResolveInfo, args: DeleteManyTopicListsArgs): Promise<AffectedRowsOutput>;
}
