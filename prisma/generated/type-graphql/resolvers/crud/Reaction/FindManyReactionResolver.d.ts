import { GraphQLResolveInfo } from "graphql";
import { FindManyReactionArgs } from "./args/FindManyReactionArgs";
import { Reaction } from "../../../models/Reaction";
export declare class FindManyReactionResolver {
    reactions(ctx: any, info: GraphQLResolveInfo, args: FindManyReactionArgs): Promise<Reaction[]>;
}
