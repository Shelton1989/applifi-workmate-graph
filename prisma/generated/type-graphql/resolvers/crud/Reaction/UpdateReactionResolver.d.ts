import { GraphQLResolveInfo } from "graphql";
import { UpdateReactionArgs } from "./args/UpdateReactionArgs";
import { Reaction } from "../../../models/Reaction";
export declare class UpdateReactionResolver {
    updateReaction(ctx: any, info: GraphQLResolveInfo, args: UpdateReactionArgs): Promise<Reaction | null>;
}
