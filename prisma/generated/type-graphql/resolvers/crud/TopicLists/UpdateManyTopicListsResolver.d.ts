import { GraphQLResolveInfo } from "graphql";
import { UpdateManyTopicListsArgs } from "./args/UpdateManyTopicListsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyTopicListsResolver {
    updateManyTopicLists(ctx: any, info: GraphQLResolveInfo, args: UpdateManyTopicListsArgs): Promise<AffectedRowsOutput>;
}
