import { GraphQLResolveInfo } from "graphql";
import { UpdateManyTopicArgs } from "./args/UpdateManyTopicArgs";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
export declare class UpdateManyTopicResolver {
    updateManyTopic(ctx: any, info: GraphQLResolveInfo, args: UpdateManyTopicArgs): Promise<AffectedRowsOutput>;
}
