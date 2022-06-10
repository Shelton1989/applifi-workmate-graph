import { GraphQLResolveInfo } from "graphql";
import { CreateReactionArgs } from "./args/CreateReactionArgs";
import { Reaction } from "../../../models/Reaction";
export declare class CreateReactionResolver {
    createReaction(ctx: any, info: GraphQLResolveInfo, args: CreateReactionArgs): Promise<Reaction>;
}
