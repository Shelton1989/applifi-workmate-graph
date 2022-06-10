import { GraphQLResolveInfo } from "graphql";
import { AggregateReactionArgs } from "./args/AggregateReactionArgs";
import { AggregateReaction } from "../../outputs/AggregateReaction";
export declare class AggregateReactionResolver {
    aggregateReaction(ctx: any, info: GraphQLResolveInfo, args: AggregateReactionArgs): Promise<AggregateReaction>;
}
