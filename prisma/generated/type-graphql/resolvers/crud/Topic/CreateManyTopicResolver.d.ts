import { GraphQLResolveInfo } from "graphql";
import { CreateManyTopicArgs } from "./args/CreateManyTopicArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class CreateManyTopicResolver {
    createManyTopic(ctx: any, info: GraphQLResolveInfo, args: CreateManyTopicArgs): Promise<AffectedRowsOutput>;
}
