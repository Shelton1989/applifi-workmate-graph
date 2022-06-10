import { GraphQLResolveInfo } from "graphql";
import { UpsertReactionArgs } from "./args/UpsertReactionArgs";
import { Reaction } from "../../../models/Reaction";
export declare class UpsertReactionResolver {
    upsertReaction(ctx: any, info: GraphQLResolveInfo, args: UpsertReactionArgs): Promise<Reaction>;
}
