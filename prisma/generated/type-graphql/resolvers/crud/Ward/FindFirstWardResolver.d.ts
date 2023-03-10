import { GraphQLResolveInfo } from "graphql";
import { FindFirstWardArgs } from "./args/FindFirstWardArgs";
import { Ward } from "../../../models/Ward";
export declare class FindFirstWardResolver {
    findFirstWard(ctx: any, info: GraphQLResolveInfo, args: FindFirstWardArgs): Promise<Ward | null>;
}
