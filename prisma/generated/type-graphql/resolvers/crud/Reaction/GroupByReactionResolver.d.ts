import { GraphQLResolveInfo } from "graphql";
import { GroupByReactionArgs } from "./args/GroupByReactionArgs";
import { ReactionGroupBy } from "../../outputs/ReactionGroupBy";
export declare class GroupByReactionResolver {
    groupByReaction(ctx: any, info: GraphQLResolveInfo, args: GroupByReactionArgs): Promise<ReactionGroupBy[]>;
}
