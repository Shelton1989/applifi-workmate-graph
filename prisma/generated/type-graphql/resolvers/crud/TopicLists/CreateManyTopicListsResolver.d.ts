import { GraphQLResolveInfo } from "graphql";
import { CreateManyTopicListsArgs } from "./args/CreateManyTopicListsArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyTopicListsResolver {
    createManyTopicLists(ctx: any, info: GraphQLResolveInfo, args: CreateManyTopicListsArgs): Promise<AffectedRowsOutput>;
}
