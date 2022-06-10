import { GraphQLResolveInfo } from "graphql";
import { DeleteReactionArgs } from "./args/DeleteReactionArgs";
import { Reaction } from "../../../models/Reaction";
export declare class DeleteReactionResolver {
    deleteReaction(ctx: any, info: GraphQLResolveInfo, args: DeleteReactionArgs): Promise<Reaction | null>;
}
