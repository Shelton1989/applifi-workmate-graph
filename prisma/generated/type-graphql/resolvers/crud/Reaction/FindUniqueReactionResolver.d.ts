import { GraphQLResolveInfo } from "graphql";
import { FindUniqueReactionArgs } from "./args/FindUniqueReactionArgs";
import { Reaction } from "../../../models/Reaction";
export declare class FindUniqueReactionResolver {
    reaction(ctx: any, info: GraphQLResolveInfo, args: FindUniqueReactionArgs): Promise<Reaction | null>;
}
