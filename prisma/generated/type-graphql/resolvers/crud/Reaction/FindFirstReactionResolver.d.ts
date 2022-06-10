import { GraphQLResolveInfo } from "graphql";
import { FindFirstReactionArgs } from "./args/FindFirstReactionArgs";
import { Reaction } from "../../../models/Reaction";
export declare class FindFirstReactionResolver {
    findFirstReaction(ctx: any, info: GraphQLResolveInfo, args: FindFirstReactionArgs): Promise<Reaction | null>;
}
